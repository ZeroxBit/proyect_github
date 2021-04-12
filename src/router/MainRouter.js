import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import App from "../App";
import NavBar from "../components/navBar/NavBar.js";
import Repositories from "../views/Repositories";

export const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/repositorios" component={Repositories} />

                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
