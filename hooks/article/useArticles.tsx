// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Article } from "./type";

type Response = Article[];

export const useArticles = () => {
  return useQuery<Response, Error>(["articles"], () =>
    axios.get("/articles").then((res) => res.data)
  );
};
