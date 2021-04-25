import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHero from "../components/hero/MainHero.js";
import NavBar from "../components/navBar/NavBar.js";
import Login from "../views/Login.js";
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
                <Route exact path="/login" component={Login} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Router>
    );
};

export default MainRouter;
