import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import App from "../App";
import { NavBar } from "../components/NavBar";

export const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
