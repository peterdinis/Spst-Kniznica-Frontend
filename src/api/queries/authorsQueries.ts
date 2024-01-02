import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const getAuthors = () => api.get("/Authors").then((res) => res.data);

export const getOneAuthor = (id: number) => {
  if (!id) {
    return;
  }

  return api.get(`/Authors/${id}`).then((res) => res.data);
};