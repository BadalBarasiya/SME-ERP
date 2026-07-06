// import API from "../api/itemApi";
// import categoryAPI from "../api/categoryApi";


// export const getItems = (
//   page,
//   limit,
//   search,
//   category,
//   sortBy,
//   order
// ) => {
//   return API.get(
//     `/list?page=${page}&limit=${limit}&search=${search}&category=${category}&sortBy=${sortBy}&order=${order}`
//   );
// };
// // Get Categories
// export const getCategories = () => {
//   return categoryAPI.get("/list");
// };

// // Add Item
// export const addItem = (data) => {
//   return API.post("/add", data);
// };

// // Update Item
// export const updateItem = (id, data) => {
//   return API.put(`/${id}`, data);
// };

// // Get Items
// // export const getItems = () => {
// //   return API.get("/list");
// // };             



import API from "../api/itemApi";
import categoryAPI from "../api/categoryApi";

// Get Items
export const getItems = (
  page,
  limit,
  search,
  category,
  sortBy,
  order
) => {
  return API.get(
    `/list?page=${page}&limit=${limit}&search=${search}&category=${category}&sortBy=${sortBy}&order=${order}`
  );
};

// Get Categories
export const getCategories = () => {
  return categoryAPI.get("/list");
};

// Add Item
export const addItem = (data) => {
  return API.post("/add", data);
};

// Update Item
export const updateItem = (id, data) => {
  return API.put(`/${id}`, data);
};

// Delete Item
export const deleteItem = (id) => {
  return API.delete(`/${id}`);
};

// Get Item Stats
export const getStats = () => {
  return API.get("/stats");
};