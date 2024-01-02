import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const allBooks = () =>api.get("/Books").then((res) => res.data);