import { BookType } from '@/types/BookTypes';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const createNewBook = (data: BookType) => {
    return api.post('/Books', data);
};

export const updateBook = (id: number, data: BookType) => {
    if (!id) {
        return;
    }

    return api.put(`/Books/${id}`, data);
};

export const deleteBook = (id: number) => {
    if (!id) {
        return;
    }

    return api.delete(`/Books/${id}`);
};
