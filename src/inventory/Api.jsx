import axios from "axios";

const api_inv = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

/* 
apiClient.interceptors.request.use((config) => {
  // Example: Add Authorization token
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
 */
export default api_inv;
