// import axios from "axios";
import { useQuery } from "react-query";

import axios from "@/libs/axiosInstance";
import type { Event } from "./type";

type Response = Event;

export const useEvent = (id?: string) => {
  return useQuery<Response, Error>(
    ["events", id],
    () => axios.get(`/events/${id}`).then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
