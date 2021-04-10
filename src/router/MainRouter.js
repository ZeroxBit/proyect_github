import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import App from "../App";
import NavBar from "../components/navBar/NavBar.js";

export const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Router>
    );
};
