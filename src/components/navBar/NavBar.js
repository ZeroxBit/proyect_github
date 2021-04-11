import React, { useState } from "react";
import useResize from "../../hooks/useResize";
import Brand from "./sections/Brand";
import ListItems from "./sections/ListItems";

// Menu!!
const NavBar = () => {
    const [showMenuMobil, setShowMenuMobil] = useState(false);
    const [, isMobil] = useResize();
    const handleToggleMenuInMobil = () => setShowMenuMobil(!showMenuMobil);

    return (
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
