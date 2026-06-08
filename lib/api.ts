import axios from "axios";
import { handleAxiosError } from "@/utils/axiosErrorHandler";

const baseURL =
  // process.env.NEXT_PUBLIC_TEST_API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (typeof window !== "undefined" ? window.location.origin : undefined);

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = handleAxiosError(error);
    error.message = message;

    return Promise.reject(error);
  },
);

export default api;
