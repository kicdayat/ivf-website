// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Banner } from "./type";

type Response = Banner[];

export const useBanners = () => {
  return useQuery<Response, Error>(["banners"], () =>
    axios.get("/banners").then((res) => res.data)
  );
};
