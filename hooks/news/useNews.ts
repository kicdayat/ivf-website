// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { News } from "./type";

type Response = News[];

export const useNews = () => {
  return useQuery<Response, Error>(["news"], () =>
    axios.get("/news").then((res) => res.data)
  );
};
