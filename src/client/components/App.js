import React from "react";
import {Switch, Route} from "react-router-dom";
import {Helmet} from "react-helmet";

import {Section, Spacer} from "./components.js";
import {pages} from "../pages/pages.js";
import logo from "../assets/logo.png";

export const App = () => (
    <div className="mhFull dFlex fdColumn ff1 bg3 c1">
        <Section outerClassName="bg1">
            <header className="c2 pt1 pb1 dFlex aiCenter">
                <div className="flex1">
                    <img className="hLogo" src={logo} alt="Logo"/>
                </div>
                <nav className="">
                    Nav
                </nav>
            </header>
        </Section>

        <Switch>
            {pages.map(page => (
                <Route key={page.path} path={page.path} exact>
                    <Helmet><title>{page.name}</title></Helmet>
                    {page.content}
                </Route>
            ))}
        </Switch>

        <Spacer expand/>

        <Section outerClassName="bg2">
            <footer className="c1 pt2 pb2 fs2 taCenter fwBold">
                © {new Date().getFullYear()} Under Water Works
            </footer>
        </Section>
    </div>
);