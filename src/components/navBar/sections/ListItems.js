import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../config.json";

/**
 * El listado y valores a usar, estan definidos en uns archivo json {menuItems}
 * @param {string} currentClass La clase a ser aplicada
 * @returns regresa un listado de componentes NavLink
 */
const Items = ({ currentClass }) => {
    const handleRenderItems = () => {
        return menuItems.map(({ path, activeClass, name, exact }, i) => {
            return (
                <NavLink
                    key={`${name}-${i}`}
                    to={path}
                    exact
                    className="navbar-item"
                    activeClassName={activeClass}
                >
                    {name}
                </NavLink>
            );
        });
    };

    return <div className={currentClass}>{handleRenderItems()}</div>;
};

/**
 * Se usa un Hook{useResize} para saber cuando esta en un dispositivo mobil
 * @param {bool} showMenuMobil define si se despliega el menu en mobil
 * @returns El listado de items del menu!!
 */
const ListItems = ({ showMenuMobil, isMobil }) => {
    const handleClassListItems = () => {
        const base = "navbar-start ";
        const mobil =
            "is-flex is-align-items-flex-end is-flex-direction-column";
        if (isMobil) {
            return base + mobil;
        }

        return base;
    };

    return (
        <div
            id="navbarBasicExample"
            className={`navbar-menu ${showMenuMobil ? "is-active" : ""}`}
        >
            <Items currentClass={handleClassListItems()} />
        </div>
    );
};

export default ListItems;
