import React, {useState, useEffect} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

import {database} from "./database.js";

import {Button} from "../shared/lib.js";
import {logo, smallNavOpen, smallNavClose} from "../shared/assets.js";

export const App = () => {
    const [displayMobileNav, setDisplayMobileNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMobileNav = () => {
        if(displayMobileNav){
            setDisplayMobileNav(false);
        }
        else{
            setScrollPosition(window.scrollY);
            setDisplayMobileNav(true);
        }
    };

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        html.style["scroll-behavior"] = "initial";
        window.scrollTo(0, scrollPosition);
        html.style["scroll-behavior"] = "smooth";
    }, [displayMobileNav, scrollPosition]);

    return (
        <div
            id="top"
            className={
                "mhFull dFlex fdColumn ff1 bg3 c1 fs1 "
                + (displayMobileNav ? "ofHidden " : "")
            }
        >

            {/* Header */}
            <div className="Gutters Nav NavHeight bg1">
                <header className="c2 pt1 pb1 dFlex aiCenter hFull">
                    <div className="flex1 hFull">
                        <a href="#top" className={"hFull dFlex aiCenter"}>
                            <img className="NavLogoHeight maxHeightFull" src={logo} alt=""/>
                        </a>
                    </div>
                    <nav className={"NavDisplayLarge fs2"}>
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
                    <nav className={"NavDisplaySmall hFull"}>
                        <div className={"hFull dFlex aiCenter"}>
                            <img
                                onClick={() => toggleMobileNav()}
                                src={displayMobileNav ? smallNavClose : smallNavOpen}
                                alt=""
                                className={"NavButtonHeight maxHeightFull cursorPointer"}/>
                        </div>
                    </nav>
                </header>
            </div>

            {/* Since the nav is position: fixed, we need to push the rest of the page content down */}
            <div className={"NavHeight"} style={{flexShrink: "0"}}/>

            <div
                className={
                    "bg2 "
                    + (displayMobileNav ? "" : "dNone ")
                }
                style={{position: "fixed", width: "100%", zIndex: "1", top: "0", bottom: "0", overflow: "auto"}}
            >
                <div className={"NavHeight"}/>
                <div className={"Gutters pt2 taCenter fs4"}>
                    {database.pages.map((page, i) => (
                        <Link
                            key={page.path}
                            to={page.path}
                            onClick={() => setDisplayMobileNav(false)}
                            className={
                                "dBlock pb2 "
                                + (useLocation().pathname === page.path ? "fwBold" : "")
                            }
                        >
                            {page.name}
                        </Link>
                    ))}
                </div>
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
                        © {new Date().getFullYear()} Pacific Watersports
                    </div>
                    <div>
                        <Button to="#top" style="transparent" raw small block>↑ Resurface ↑</Button>
                    </div>
                </footer>
            </div>

        </div>
    );
};