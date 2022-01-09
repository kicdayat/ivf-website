import axios from "axios";
import { useQuery } from "react-query";

export type Banner = {
  id: number;
  title: string;
  image: string;
  tags: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type Response = Banner[];

export const useBanners = () => {
  return useQuery<Response, Error>(["banners"], () =>
    axios.get("http://localhost:5000/api/v1/banners").then((res) => res.data)
  );
};
