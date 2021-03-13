import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://agromallaccountmanager.azurewebsites.net",
});

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
