import axios from "axios";
import env from "react-dotenv";

const instanceAxios = axios.create({
    baseURL: env.API_URL,
});

instanceAxios.interceptors.request.use((request) => {
    request.headers.Accept = env.HEADER;

    return request;
});

export const API = {
    get: async (path, params) => {
        return await instanceAxios.get(path, { params });
    },
};
