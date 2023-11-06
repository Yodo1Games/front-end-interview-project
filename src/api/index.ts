import { AxiosResponse as ApiResponse } from "axios";
import { portalService } from "./service";

export const getTagApi = () => {
  return portalService({
    url: "/api/get-tags",
    method: "get",
  });
};

export const addTagApi = (data: { name: string; color: string }) => {
  return portalService({
    url: `/api/post-tags`,
    method: "post",
    data,
  });
};
export type { ApiResponse };
