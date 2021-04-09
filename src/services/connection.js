import axios from "axios";
import env from "react-dotenv";

const instanceAxios = axios.create({
    baseURL: env.API_URL
})

export const API = {
    get: async (path, params) => {
        return await instanceAxios.get(path, {params});
    }
}