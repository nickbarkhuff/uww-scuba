import React from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

import {Wrapper, Section, Spacer} from "./components.js";
import {pages} from "../pages/pages.js";
import logo from "../assets/logo.png";

export const App = () => (
    <Wrapper>
        <Section outerClassName="bg1" innerClassName="xSectionPaddingSlim c2 pLeftNone pRightNone">
            <header className="dFlex aiCenter">
                <div className="flex1">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="xLogoHeight"/>
                    </Link>
                </div>
                <nav className="fs2">
                    {pages.map((page, i) => (
                        <div
                            key={page.path}
                            className={
                                "xNavLinkWrapper "
                                + (i + 1 < pages.length ? "pRight1 " : "")
                            }
                        >
                            <Link to={page.path} className="xNavLink">
                                {page.name}
                            </Link>
                            <div className={
                                "xNavLinkUnderline "
                                + (useLocation().pathname === page.path ? "xNavLinkUnderlineCurrent " : "")
                            }/>
                        </div>
                    ))}
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

        <Spacer push/>

        <Section outerClassName="bg2" innerClassName="xSectionPadding">
            <footer className="fs2 taCenter">
                © {new Date().getFullYear()} Under Water Works
            </footer>
        </Section>
    </Wrapper>
);