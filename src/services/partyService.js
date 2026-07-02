// export const getParties = () => API.get("/list");

// export const addParty = (data) => API.post("/add", data);

// export const deleteParty = (id) =>
//     API.delete(`/${id}`);


import API from "../api/partyApi";

// Get Parties
export const getParties = (page, limit, search,type,sortBy,
  order) => {
  return API.get(
    `/list?page=${page}&limit=${limit}&search=${search}&type=${type}&sortBy=${sortBy}&order=${order}`
  );
};

// Get Dashboard Stats
export const getStats = () => {
  return API.get("/stats");
};

// Add Party
export const addParty = (data) => {
  return API.post("/add", data);
};

// Update Party
export const updateParty = (id, data) => {
  return API.put(`/${id}`, data);
};

// Delete Party
export const deleteParty = (id) => {
  return API.delete(`/${id}`);
};