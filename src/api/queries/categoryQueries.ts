import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const allCategories = () =>api.get("/Categories").then((res) => res.data);

export const getOneCategory = (id: number) => {
    if (!id) {
      return;
    }
  
    return api.get(`/Categories/${id}`).then((res) => res.data);
  };
  