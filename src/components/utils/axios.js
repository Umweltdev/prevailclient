import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: "https://prevailserver-4b3c670a5496.herokuapp.com",
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

