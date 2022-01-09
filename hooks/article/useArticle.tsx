import axios from "axios";
import { useQuery } from "react-query";

import type { Article } from "./type";

type Response = Article;

export const useArticle = (id?: string) => {
  return useQuery<Response, Error>(
    ["articles", id],
    () =>
      axios
        .get(`http://localhost:5000/api/v1/articles/${id}`)
        .then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
