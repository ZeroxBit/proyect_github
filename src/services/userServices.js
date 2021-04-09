import { API } from "./connection"
import env from "react-dotenv";

export const getUsersServices = async () => {
    console.log( "apth", env.PATH_USERS )
    return await API.get(env.PATH_USERS);
}