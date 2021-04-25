import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import useResize from "../../hooks/useResize";
import { removeTokenServices } from "../../services/authServices";
import { instanceAxios } from "../../services/connection";
import Brand from "./sections/Brand";
import ListItems from "./sections/ListItems";

// Menu!!
const NavBar = () => {
    const [showMenuMobil, setShowMenuMobil] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const [, isMobil] = useResize();
    useEffect(() => {
        handleCatchExpireToken();
        return () => {};
    }, []);

    const handleCatchExpireToken = () => {
        instanceAxios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.log("errr", error.response);
                if (error.response.status === 401) {
                    removeTokenServices();
                    history.replace("/login");
                }
            }
        );
    };

    const handleToggleMenuInMobil = () => setShowMenuMobil(!showMenuMobil);

    const handleIsRender = () => {
        return location.pathname === "/login";
    };

    return handleIsRender() ? null : (
        <nav
            className="navbar is-fixed-top is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <Brand click={handleToggleMenuInMobil} />
                <ListItems showMenuMobil={showMenuMobil} isMobil={isMobil} />
            </div>
        </nav>
    );
};

export default NavBar;
