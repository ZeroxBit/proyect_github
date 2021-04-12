import { API } from "./connection";
import env from "react-dotenv";

/**
 * @param {string} name El nombre de usuario a buscar
 * @returns Regresa un listado de usuarios
 */
export const getSearchUsersServices = async (name, page = 1) => {
    return await API.get(env.PATH_SEARCH_USERS, {
        q: name,
        per_page: 30,
        page,
    });
};

/**
 * Recibe el parametro obligatorio y regresa un unico usuario!!
 * @param {string} name El nombre de usuario a buscar
 * @returns Regresa el usuario buscado
 */
export const getUserInfo = async (name) => {
    return await API.get(`${env.PATH_USERS}/${name}`);
};
