import inventoryAPI from "../api/inventoryApi";

// Get Inventory
export const getInventory = (
  page,
  limit,
  search,
  category,
  status,
  sortBy,
  order
) => {
  return inventoryAPI.get(
    `/list?page=${page}&limit=${limit}&search=${search}&category=${category}&status=${status}&sortBy=${sortBy}&order=${order}`
  );
};

// Inventory Stats
export const getInventoryStats = () => {
  return inventoryAPI.get("/stats");
};

export const updateInventory = (id, data) => {
  return inventoryAPI.put(`/${id}`, data);
};

export const deleteInventory = (id) => {
  return inventoryAPI.delete(`/${id}`);
};