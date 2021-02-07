import React from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

import {database} from "./database.js";

import {Button} from "../shared/lib.js";
import {logo, smallNavOpen, smallNavClose} from "../shared/assets.js";

export const App = () => (
    <div className="mhFull dFlex fdColumn ff1 bg3 c1 fs1" id="top">

        {/* Header */}
        <div className="Gutters bg1">
            <header className="c2 pt1 pb1 dFlex aiCenter">
                <div className="flex1">
                    <Link to="/">
                        <img className="LogoHeight" src={logo} alt="Logo"/>
                    </Link>
                </div>
                <nav className={"DisplayLargeNav fs2"}>
                    {database.pages.map((page, i) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className={
                                "NavParent dInlineBlock "
                                + (i + 1 < database.pages.length ? "NavItemSpacing" : "")
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
                <nav className={"DisplaySmallNav"}>
                    <img src={smallNavOpen} alt="" className={"NavButtonHeight"}/>
                    {/*<img src={smallNavClose} alt="" className={"NavButtonHeight"}/>*/}
                </nav>
            </header>
        </div>

        {/* Pages */}
        <Switch>
            {database.pages.map(page => (
                <Route key={page.path} path={page.path} exact>
                    <Helmet><title>{page.name}</title></Helmet>
                    {page.content}
                </Route>
            ))}
        </Switch>

        {/* Push footer to bottom */}
        <div className="flex1"/>

        {/* Footer */}
        <div className="Gutters bg1 c2">
            <footer className="pt2 pb2 dFlex aiCenter FooterDirection FooterAlignItems">
                <div className={"DisplayFirstFooterButton"}>
                    <Button to="#top" style="transparent" raw small block>↑ Resurface ↑</Button>
                </div>
                <div className="flex1 fwBold fs2 taCenter FooterItemSpacing">
                    © {new Date().getFullYear()} Under Water Works
                </div>
                <div>
                    <Button to="#top" style="transparent" raw small block>↑ Resurface ↑</Button>
                </div>
            </footer>
        </div>

    </div>
);