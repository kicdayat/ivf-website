import axios from "axios";
import { useQuery } from "react-query";

import type { Event } from "./type";

type Response = Event[];

export const useEvents = () => {
  return useQuery<Response, Error>(["events"], () =>
    axios.get("http://localhost:5000/api/v1/events").then((res) => res.data)
  );
};
