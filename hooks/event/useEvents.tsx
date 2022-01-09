// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Event } from "./type";

type Response = Event[];

export const useEvents = () => {
  return useQuery<Response, Error>(["events"], () =>
    axios.get("/events").then((res) => res.data)
  );
};
