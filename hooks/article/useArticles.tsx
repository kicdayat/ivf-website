import axios from "axios";
import { useQuery } from "react-query";

import type { Article } from "./type";

type Response = Article[];

export const useArticles = () => {
  return useQuery<Response, Error>(["articles"], () =>
    axios.get("http://localhost:5000/api/v1/articles").then((res) => res.data)
  );
};
