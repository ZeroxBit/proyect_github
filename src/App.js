import React from "react";
import ContextApp from "./context/ContextApp";
import MainRouter from "./router/MainRouter";

import "./style/style.scss";

function App() {
    return (
        <ContextApp>
            <MainRouter />
        </ContextApp>
    );
}

export default App;
