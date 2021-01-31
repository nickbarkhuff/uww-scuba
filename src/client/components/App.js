import React from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

import {Wrapper, Section, Spacer} from "./components.js";
import {pages} from "../pages/pages.js";
import logo from "../assets/logo.png";

export const App = () => (
    <Wrapper>
        <Section outerClassName="bg1" innerClassName="xSectionPaddingSlim c2 pLeftNone pRightNone">
            <header className="dFlex aiCenter fs2">
                <div className="flex1">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="xLogoHeight"/>
                    </Link>
                </div>
                <nav>
                    {pages.map((page, i) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            className={
                                "dInlineBlock transformScaleX1Hover "
                                + (i + 1 < pages.length ? "mRight1" : "")
                            }
                        >
                            <div  className="xNavUnderlineSpacing">
                                {page.name}
                            </div>
                            <div className={
                                "xNavUnderlineHeight xNavUnderlineTransition bg5 br1 transformScaleX0 transformScaleX1Trigger "
                                + (useLocation().pathname === page.path ? "transformScaleX1" : "")
                            }/>
                        </Link>
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
            <footer className="fs2 taCenter fwBold">
                © {new Date().getFullYear()} Under Water Works
            </footer>
        </Section>
    </Wrapper>
);