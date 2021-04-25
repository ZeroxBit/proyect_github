import env from "react-dotenv";
import { API } from "./connection";

export const singInServices = async ({ email, password }) => {
    try {
        const { data } = await API.post(env.PATH_LOGIN, { email, password });

        return data;
    } catch (error) {
        return null;
    }
};

const TOKEN = "token";

export const saveTokenServices = (token) => {
    window.sessionStorage.setItem(TOKEN, token);
};

export const getTokenServices = () => {
    return window.sessionStorage.getItem(TOKEN);
};

export const removeTokenServices = () => {
    window.sessionStorage.removeItem(TOKEN);
};
