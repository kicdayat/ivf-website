// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { News } from "./type";

type Response = News;

export const useSingleNews = (id?: string) => {
  return useQuery<Response, Error>(
    ["news", id],
    () => axios.get(`/news/${id}`).then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
