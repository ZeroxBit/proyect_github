import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    const [showMenuMobil, setShowMenuMobil] = useState(false);

    return (
        <nav
            className="navbar is-fixed-top is-dark"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://luuna-bucket.imgix.net/img/header-logo.svg?auto=compress,format"
                            width="112"
                            height="28"
                        />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={() => setShowMenuMobil(!showMenuMobil)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${
                        showMenuMobil ? "is-active" : ""
                    }`}
                >
                    <div className="navbar-start ">
                        <a className="navbar-item is-active">Usuarios</a>

                        <a className="navbar-item is-right">Repositorios</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
