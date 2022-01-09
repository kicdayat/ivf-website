import axios from "axios";
import { useQuery } from "react-query";

import type { Banner } from "./type";

type Response = Banner[];

export const useBanners = () => {
  return useQuery<Response, Error>(["banners"], () =>
    axios.get("http://localhost:5000/api/v1/banners").then((res) => res.data)
  );
};
