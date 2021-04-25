import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";
import MainHero from "../components/hero/MainHero.js";
import NavBar from "../components/navBar/NavBar.js";
import Repositories from "../views/Repositories";
import Users from "../views/Users";

const MainRouter = () => {
    return (
        <Router basename="/">
            <NavBar />
            <MainHero />

            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/repositorios" component={Repositories} />

                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default MainRouter;
