// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { StatisticCount } from "./type";

type Response = StatisticCount;

export const useStatisticCount = () => {
  return useQuery<Response, Error>(["statistic-count"], () =>
    axios.get(`/statistics/count`).then((res) => res.data)
  );
};
