import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { toast } from "react-toastify";
import { getCategories } from "../services/categoryService";

import {
  getInventory,
  getInventoryStats, updateInventory,
  deleteInventory
} from "../services/inventoryService";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  const [stats, setStats] = useState({
    totalItems: 0,
    totalStockKg: 0,
    totalPieces: 0,
    lowStockItems: 0,
  });

  const [showForm, setShowForm] = useState(false);

const [selectedInventory, setSelectedInventory] = useState(null);

const [formData, setFormData] = useState({
  itemInKg: "",
  totalPc: "",
  lowStockWarning: "",
});
  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [categoryFilter, setCategoryFilter] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [sortBy, setSortBy] = useState("createdAt");

  const [order, setOrder] = useState("desc");

  // Fetch Inventory
  const fetchInventory = async () => {
    try {
      const res = await getInventory(
        page,
        limit,
        debouncedSearch,
        categoryFilter,
        statusFilter,
        sortBy,
        order
      );

      setInventory(res.data.inventory);

      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Stats
  const fetchStats = async () => {
    try {
      const res = await getInventoryStats();

      setStats(res.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const res = await getCategories();

      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
const handleEdit = (item) => {
  setSelectedInventory(item);

  setFormData({
    itemInKg: item.itemInKg,
    totalPc: item.totalPc,
    lowStockWarning: item.lowStockWarning,
  });

  setShowForm(true);
};
const handleDelete = async (id) => {
  if (!window.confirm("Delete this inventory?")) return;

  try {
    const res = await deleteInventory(id);

    toast.success(res.data.message);

    fetchInventory();

    fetchStats();
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Delete failed"
    );
  }
};
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const res = await updateInventory(
      selectedInventory._id,
      formData
    );

    toast.success(res.data.message);

    setShowForm(false);

    setSelectedInventory(null);

    fetchInventory();

    fetchStats();
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Update failed"
    );
  }
};
  useEffect(() => {
    fetchInventory();
  }, [
    page,
    debouncedSearch,
    categoryFilter,
    statusFilter,
    sortBy,
    order,
  ]);

  useEffect(() => {
    fetchStats();
    fetchCategories();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, categoryFilter, statusFilter]);

  return {
    inventory,
    stats,
    categories,

    page,
    totalPages,
    setPage,

    search,
    setSearch,

    categoryFilter,
    setCategoryFilter,

    statusFilter,
    setStatusFilter,

    sortBy,
    setSortBy,

    order,
    setOrder,
    showForm,
setShowForm,

selectedInventory,

formData,

handleEdit,
handleDelete,

handleChange,
handleUpdate,
  };
};

export default useInventory;