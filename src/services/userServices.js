import { API } from "./connection"
import env from "react-dotenv";

/**
 * No necesita recibir parametos
 * @returns Regresa un listado de usuarios
 */
export const getUsersServices = async () => {
    return await API.get(env.PATH_USERS);
}

/**
 * Recibe el parametro obligatorio y regresa un unico usuario!!
 * @param {string} name El nombre de usuario a buscar
 * @returns Regresa el usuario buscado
 */
export const getUserByName = async (name) => {
    return await API.get(env.PATH_USER, name);
}