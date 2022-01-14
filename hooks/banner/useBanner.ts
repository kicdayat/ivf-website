// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Banner } from "./type";

type Response = Banner;

export const useBanner = (id?: string) => {
  return useQuery<Response, Error>(
    ["banners", id],
    () => axios.get(`/banners/${id}`).then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
