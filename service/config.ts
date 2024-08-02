import { getDataFromCookie } from "@/utils/data-service";
import axios from "axios";
import type { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: "https://store.go-clothes.uz/v1",
});

request.interceptors.request.use((config) => {
  const token = getDataFromCookie("access_token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default request;