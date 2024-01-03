import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const allBooks = () => api.get('/Books').then((res) => res.data);

export const getOneBook = (id: number) => {
    if (!id) {
        return;
    }

    return api.get(`/Books/${id}`).then((res) => res.data);
};
