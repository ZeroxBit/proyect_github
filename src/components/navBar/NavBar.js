import React, { useState } from "react";
import { useLocation } from "react-router";
import useResize from "../../hooks/useResize";
import Brand from "./sections/Brand";
import ListItems from "./sections/ListItems";

// Menu!!
const NavBar = () => {
    const [showMenuMobil, setShowMenuMobil] = useState(false);

    const location = useLocation();
    const [, isMobil] = useResize();

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
