import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string,
});

export const exampleQueryRequst = () =>
    api.get('/WeatherForecast').then((res) => res.data);
