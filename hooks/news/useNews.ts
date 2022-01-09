import axios from "axios";
import { useQuery } from "react-query";

import type { News } from "./type";

type Response = News[];

export const useNews = () => {
  return useQuery<Response, Error>(["news"], () =>
    axios.get("http://localhost:5000/api/v1/news").then((res) => res.data)
  );
};
