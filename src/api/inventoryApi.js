import axios from "axios";

const inventoryAPI = axios.create({
  baseURL: "http://localhost:5000/api/inventory",
});

export default inventoryAPI;
