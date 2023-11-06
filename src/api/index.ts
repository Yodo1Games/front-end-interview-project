import { AxiosResponse as ApiResponse } from "axios";
import { portalService } from "./service";

export const getAppListApi = () => {
    return portalService({
      url: "/v1/app/list",
      method: "get",
    });
  };

export type { ApiResponse };
