import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: "https://prevail-server-3af81e972035.herokuapp.com",
  // baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

