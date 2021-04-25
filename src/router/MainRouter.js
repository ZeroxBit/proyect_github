import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainHero from "../components/hero/MainHero.js";
import NavBar from "../components/navBar/NavBar.js";
import Login from "../views/Login.js";
import Repositories from "../views/Repositories";
import Users from "../views/Users";
import PrivateRoute from "./PrivateRute.js";
import PublicRoute from "./PublicRoute.js";

const MainRouter = () => {
    return (
        <Router basename="/">
            <NavBar />

            <MainHero />

            <Switch>
                <PrivateRoute exact path="/" component={Users} />
                <PrivateRoute
                    exact
                    path="/repositorios"
                    component={Repositories}
                />
                <PublicRoute exact path="/login" component={Login} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Router>
    );
};

export default MainRouter;
