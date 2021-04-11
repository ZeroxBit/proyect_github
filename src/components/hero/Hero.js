import React from "react";
import PropTypes from "prop-types";

const Hero = ({ extraClass = "", ...props }) => {
    return <section className={`hero ${extraClass}`}>{props.children}</section>;
};

Hero.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Hero;
