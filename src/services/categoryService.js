import API from "../api/categoryApi";

// Get Categories
export const getCategories = (
  page,
  limit,
  search,
  sortBy,
  order
) => {
  return API.get("/list", {
    params: {
      page,
      limit,
      search,
      sortBy,
      order,
    },
  });
};

// Get Stats
export const getStats = () => {
  return API.get("/stats");
};

// Add Category
export const addCategory = (data) => {
  return API.post("/add", data);
};

// Update Category
export const updateCategory = (id, data) => {
  return API.put(`/${id}`, data);
};

// Delete Category
export const deleteCategory = (id) => {
  return API.delete(`/${id}`);
};
    