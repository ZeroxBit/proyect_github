import React from "react";

const HeroBody = ({ children, title }) => {
    return (
        <div className="hero-body">
            <h1 className="title">{title}</h1>
            <div className="column is-6">{children}</div>
        </div>
    );
};

export default HeroBody;
