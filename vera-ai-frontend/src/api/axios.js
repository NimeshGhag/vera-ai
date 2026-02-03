import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || '/api/';
const instance = axios.create({
  // Use a relative path so Vite dev server can proxy requests to the backend
  baseURL: BASE_URL,
  withCredentials: true,
});

export default instance;