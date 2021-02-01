import React from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

import {pages} from "../pages/pages.js";
import logo from "../assets/logo.png";

export const App = () => (
    <div className="mhFull dFlex fdColumn ff1 bg3 c1 fs1">

        {/* Header */}
        <div className="Gutters bg1">
            <header className="c2 pt1 pb1 dFlex aiCenter">
                <div className="flex1">
                    <Link to="/">
                        <img className="LogoHeight" src={logo} alt="Logo"/>
                    </Link>
                </div>
                <nav className="fs2">
                    {pages.map((page, i) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className={
                                "NavParent dInlineBlock "
                                + (i + 1 < pages.length ? "NavItemSpacing" : "")
                            }
                        >
                            <div className="NavLineSpacing">{page.name}</div>
                            <div className={
                                "NavLine bg4 br1 "
                                + (useLocation().pathname === page.path ? "NavLineOn" : "")
                            }/>
                        </Link>
                    ))}
                </nav>
            </header>
        </div>

        {/* Pages */}
        <Switch>
            {pages.map(page => (
                <Route key={page.path} path={page.path} exact>
                    <Helmet><title>{page.name}</title></Helmet>
                    {page.content}
                </Route>
            ))}
        </Switch>

        {/* Push footer to bottom */}
        <div className="flex1"/>

        {/* Footer */}
        <div className="Gutters bg2">
            <footer className="pt2 pb2 fs2 fwBold taCenter">
                © {new Date().getFullYear()} Under Water Works
            </footer>
        </div>

    </div>
);