import axios from "axios";

// const BASE_URL = "https://prevailserver-4b3c670a5496.herokuapp.com/api/";
const BASE_URL = "http://localhost:8080/";
let token = "";
const storedToken = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
)?.currentUser?.accessToken;
if (storedToken) {
  token = storedToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config) => {
    const storedToken = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
    )?.currentUser?.accessToken;

    if (storedToken) {
      config.headers.Authorization = `Bearer ${storedToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const updateTokenInHeaders = (token) => {
  userRequest.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};
