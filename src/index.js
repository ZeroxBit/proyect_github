import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MainRouter } from "./router/MainRouter";

ReactDOM.render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>,
    document.getElementById("root")
);
