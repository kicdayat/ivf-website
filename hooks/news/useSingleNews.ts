import axios from "axios";
import { useQuery } from "react-query";

import type { News } from "./type";

type Response = News;

export const useSingleNews = (id?: string) => {
  console.log("id", id);
  return useQuery<Response, Error>(
    ["news", id],
    () =>
      axios
        .get(`http://localhost:5000/api/v1/news/${id}`)
        .then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
