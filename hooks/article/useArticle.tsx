// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Article } from "./type";

type Response = Article;

export const useArticle = (id?: string) => {
  return useQuery<Response, Error>(
    ["articles", id],
    () => axios.get(`/articles/${id}`).then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
