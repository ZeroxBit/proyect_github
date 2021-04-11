import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "./LogoImage";

const Brand = ({ click }) => {
    return (
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <LogoImage />
            </Link>

            <Link
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={click}
                to=""
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </Link>
        </div>
    );
};

export default Brand;
