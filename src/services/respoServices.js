import { API } from "./connection";
import env from "react-dotenv";

/**
 * @param {string} repo El repositorio a buscar!!
 * @returns Regresa un listado de repositorios
 */
export const getSearchReposServices = async (repo) => {
    return await API.get(env.PATH_REPOSITORIES, { q: repo });
};
