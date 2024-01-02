import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const allCategories = () =>api.get("/Categories").then((res) => res.data);