import React from "react";
import env from "react-dotenv";

const LogoImage = () => {
    return <img src={env.SRC_LOGO} width="112" height="28" />;
};

export default LogoImage;
