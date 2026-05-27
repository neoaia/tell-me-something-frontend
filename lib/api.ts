import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_TEST_API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (typeof window !== "undefined" ? window.location.origin : undefined);

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
