import React, { createContext, useState } from "react";

export const RootContext = createContext();

const ContextApp = ({ children }) => {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(null);
    const [isActivePaginate, setIsActivePaginate] = useState(false);

    const defaultContext = {
        search,
        setSearch,
        list,
        setList,
        isActivePaginate,
        setIsActivePaginate,
    };

    return (
        <RootContext.Provider value={defaultContext}>
            {children}
        </RootContext.Provider>
    );
};

export default ContextApp;
