import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { getCategories } from "../services/categoryService";
import { getItems, getStats, deleteItem } from "../services/itemService";

const useItem = () => {
  // ==========================
  // States
  // ==========================

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [categoryFilter, setCategoryFilter] = useState("");

  const [sortBy, setSortBy] = useState("createdAt");

  const [order, setOrder] = useState("desc");

  const [totalPages, setTotalPages] = useState(1);

  const [stats, setStats] = useState({
    totalItems: 0,
    totalCategories: 0,
    lowStockItems: 0,
  });

  // ==========================
  // Fetch Items
  // ==========================

  const fetchItems = async () => {
    try {
      const res = await getItems(
        page,
        limit,
        debouncedSearch,
        categoryFilter,
        sortBy,
        order,
      );

      setItems(res.data.items);

      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const res = await getCategories();

      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  // ==========================
  // Fetch Stats
  // ==========================

  const fetchStats = async () => {
    try {
      const res = await getStats();

      setStats(res.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  // ==========================
  // Load Data
  // ==========================

  const loadData = async () => {
    await fetchItems();
    await fetchStats();
  };

  // ==========================
  // Delete
  // ==========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );

    if (!confirmDelete) return;

    try {
      await deleteItem(id);

      await loadData();

      alert("Item deleted successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  // ==========================
  // Edit
  // ==========================

  const handleEdit = (item) => {
    setSelectedItem(item);

    setShowForm(true);
  };

  // ==========================
  // After Add / Update
  // ==========================

  const handleItemAdded = async () => {
    await loadData();

    setShowForm(false);

    setSelectedItem(null);
  };

  // ==========================
  // Effects
  // ==========================

  useEffect(() => {
    fetchItems();
  }, [page, debouncedSearch, categoryFilter, sortBy, order]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  // ==========================
  // Return
  // ==========================

  return {
    items,
    stats,

    page,
    limit,
    totalPages,
    categories,
    search,
    categoryFilter,

    sortBy,
    order,

    selectedItem,
    showForm,

    setSearch,
    setCategoryFilter,

    setPage,

    setSortBy,
    setOrder,
    setShowForm,

    handleDelete,
    handleEdit,

    handleItemAdded,

    fetchItems,
    fetchStats,
    loadData,
  };
};

export default useItem;
