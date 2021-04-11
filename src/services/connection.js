import axios from "axios";
import env from "react-dotenv";

// se genera una instancia de axios, agregandole el tributo {baseURL}
// para usarlos en todos los request donde se invoque!!
const instanceAxios = axios.create({
    baseURL: env.API_URL,
});

// Agrega el header{Accept}, a todos los request!!
instanceAxios.interceptors.request.use((request) => {
    request.headers.Accept = env.HEADER;

    return request;
});

/**
 * Exporta la instancia de axios, previamente configurada,
 * Con el unico vervo http, ya que solo se utiliza ese en este proyecto!!
 */
export const API = {
    get: async (path, params) => {
        return await instanceAxios.get(path, { params });
    },
};
