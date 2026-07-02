import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

import {
  getCategories,
  getStats,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

const useCategory = () => {
  // ==========================
  // States
  // ==========================

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [sortBy, setSortBy] = useState("createdAt");

  const [order, setOrder] = useState("desc");

  const [totalPages, setTotalPages] = useState(1);

  const [stats, setStats] = useState({
    totalCategories: 0,
  });

  // Form Data
  const [formData, setFormData] = useState({
    categoryName: "",
   subCategories: [{ name: "" }]
  });

  // ==========================
  // Fetch Categories
  // ==========================

  const fetchCategories = async () => {
    try {
      const res = await getCategories(
        page,
        limit,
        debouncedSearch,
        sortBy,
        order
      );

      setCategories(res.data.categories);

      setTotalPages(res.data.totalPages);
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
    await fetchCategories();
    await fetchStats();
  };

  // ==========================
  // Delete Category
  // ==========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      await loadData();

      alert("Category deleted successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  // ==========================
  // Edit
  // ==========================

  const handleEdit = (category) => {
    setSelectedCategory(category);

    setFormData({
      categoryName: category.categoryName,
      subCategories:
  category.subCategories.length > 0
    ? category.subCategories
    : [{ name: "" }],
    });

    setShowForm(true);
  };

  // ==========================
  // After Add / Update
  // ==========================

  const handleCategoryAdded = async () => {
    await loadData();

    setShowForm(false);

    setSelectedCategory(null);

   setFormData({
  categoryName: "",
  subCategories: [{ name: "" }],
});
  };

  // ==========================
  // Category Form
  // ==========================

  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      categoryName: e.target.value,
    });
  };

  const handleSubCategoryChange = (index, value) => {
    const updated = [...formData.subCategories];

    updated[index].name = value;

    setFormData({
      ...formData,
      subCategories: updated,
    });
  };

  const addSubCategory = () => {
    setFormData({
      ...formData,
    subCategories: [
  ...formData.subCategories,
  { name: "" },
],
    });
  };
const removeSubCategory = (index) => {
  const updated = [...formData.subCategories];

  updated.splice(index, 1);

  if (updated.length === 0) {
    updated.push({ name: "" });
  }

  setFormData({
    ...formData,
    subCategories: updated,
  });
};
//   const removeSubCategory = (index) => {
//     const updated = formData.subCategories.filter(
//       (_, i) => i !== index
//     );

//     setFormData({
//       ...formData,
//       subCategories: updated,
//     });
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      categoryName: formData.categoryName.trim(),

      subCategories: formData.subCategories.filter(
        (sub) => sub.name.trim() !== ""
      ),
    };

    if (!payload.categoryName) {
      alert("Category Name is required");
      return;
    }

    if (selectedCategory) {
      await updateCategory(selectedCategory._id, payload);

      alert("Category updated successfully");
    } else {
      await addCategory(payload);

      alert("Category added successfully");
    }

    await handleCategoryAdded();
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};
  // ==========================
  // Effects
  // ==========================

  useEffect(() => {
    fetchCategories();
  }, [page, debouncedSearch, sortBy, order]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  // ==========================
  // Return
  // ==========================

  return {
    categories,
    selectedCategory,
    showForm,
    page,
    limit,
    search,
    sortBy,
    order,
    totalPages,
    stats,
    formData,

    setSearch,
    setPage,
    setSortBy,
    setOrder,
    setShowForm,
    setSelectedCategory,
    setFormData,

    handleDelete,
    handleEdit,
    handleCategoryAdded,
    

    handleCategoryChange,
    handleSubCategoryChange,
    addSubCategory,
    removeSubCategory,
    handleSubmit
  };
};

export default useCategory;