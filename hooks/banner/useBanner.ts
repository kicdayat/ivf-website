import axios from "axios";
import { useQuery } from "react-query";

import type { Banner } from "./type";

type Response = Banner;

export const useBanner = (id?: string) => {
  console.log("id", id);
  return useQuery<Response, Error>(
    ["banner", id],
    () =>
      axios
        .get(`http://localhost:5000/api/v1/banners/${id}`)
        .then((res) => res.data),
    {
      enabled: Boolean(id),
    }
  );
};
