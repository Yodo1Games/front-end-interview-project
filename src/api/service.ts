import axios from "axios";
import { message } from "antd";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: "Bearer " + token,
    };
  } else {
    return {};
  }
};

const portalService = axios.create({
  baseURL: "",
  timeout: 20 * 1000,
});

portalService.interceptors.request.use(
  (config: any) => {
    config.headers = getAuthHeader();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

portalService.interceptors.response.use(
  (response) => {
    const { status } = response;
    switch (status) {
      case 200:
        return response;
      case 401:
        return response;
      default:
        message.error("Network Error");
        return Promise.reject(new Error("Network Error"));
    }
  },
  (error) => {
    if (error?.response?.status === 401) {
    } else {
      let msg = "";
      if (Array.isArray(error?.response.data.detail)) {
        msg = error?.response.data.detail
          .reduce((result: any[], item: { msg: any }) => {
            result.push(item.msg);
            return result;
          }, [])
          .join(",");
      } else {
        msg = error?.response.data.detail;
      }
      message.error(msg || "Error");
    }
    return Promise.reject(error);
  }
);

export { portalService };
