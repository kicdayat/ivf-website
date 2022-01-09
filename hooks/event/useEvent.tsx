import axios from "axios";
import { useQuery } from "react-query";

import type { Event } from "./type";

type Response = Event;

export const useEvent = (id?: string) => {
  return useQuery<Response, Error>(
    ["events", id],
    () =>
      axios
        .get(`http://localhost:5000/api/v1/events/${id}`)
        .then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
