import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  // baseURL: "/api",
  timeout: 3000,
  timeoutErrorMessage: "网络超时",
  withCredentials: true,
};

export default config;
