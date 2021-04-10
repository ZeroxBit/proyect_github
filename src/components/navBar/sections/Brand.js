import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ click }) => {
    return (
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <img
                    src="https://luuna-bucket.imgix.net/img/header-logo.svg?auto=compress,format"
                    width="112"
                    height="28"
                />
            </Link>

            <Link
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={click}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </Link>
        </div>
    );
};

export default Brand;
