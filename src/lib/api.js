import axios from "axios";
import {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  clearAccessToken,
  clearRefreshToken,
} from "./auth";

let setGlobalLoading = null;
export const registerLoading = (setter) => {
  setGlobalLoading = setter;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ,
  withCredentials: true, 
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  setGlobalLoading?.(true);

  const token = getAccessToken();
  if (token && (!config.headers || !config.headers.Authorization)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    setGlobalLoading?.(false); 
    return res;
  },
  async (error) => {
    setGlobalLoading?.(false); 

    const originalRequest = error.config;

    const url = originalRequest?.url || (originalRequest?.baseURL && originalRequest.url);
    if (url && url.includes("/auth/signin")) return Promise.reject(error);

    const skipRefresh = originalRequest?.skipAuthRefresh || originalRequest?.headers?.skipAuthRefresh;
    if (skipRefresh) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        let res;

        if (refreshToken) {
          res = await axios.post(
            `${api.defaults.baseURL}/auth/refresh`,
            {},
            { headers: { Authorization: `Bearer ${refreshToken}` }, withCredentials: true }
          );
        } else {
          res = await axios.post(`${api.defaults.baseURL}/auth/refresh`, {}, { withCredentials: true });
        }

        if (res?.data?.accessToken) {
          setAccessToken(res.data.accessToken);
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        }

        if (res?.data?.refreshToken) {
          setRefreshToken(res.data.refreshToken);
        }

        return api(originalRequest);
      } catch {
        clearAccessToken();
        clearRefreshToken();
        if (typeof window !== "undefined") window.location.replace("/auth/signin");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
