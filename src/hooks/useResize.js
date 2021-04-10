import React, { useState, useEffect } from "react";

// este hook permite saber el tamaño de la pantalla en todo momento!!
const useResize = (breakpoint = 768) => {
    const [isMobil, setIsMobil] = useState(false);
    const [width, setWidth] = useState(0);

    const BREAKPOINT_MOBIL = breakpoint;

    useEffect(() => {
        window.addEventListener("resize", handleUpdate);

        handleUpdate();

        return () => window.removeEventListener("resize", handleUpdate);
    }, [window.innerWidth]);

    const handleUpdate = () => {
        let currentWidth = window.innerWidth;

        setIsMobil(currentWidth <= BREAKPOINT_MOBIL);

        setWidth(currentWidth);
    };

    return [width, isMobil];
};

export default useResize;
