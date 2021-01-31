import React from "react";
import {IsVisible} from "./components.js";

export const Section = (props) => {
    return (
        <IsVisible render={(isVisible, domRef) => (
            <div
                className={
                    "xGutters "
                    + (!props.noFade ? "xFadeIn " : "")
                    + (!props.noFade && isVisible ? "xFadeInTrigger " : "")
                    + (props.outerClassName || "")
                }
                style={
                    props.bgImage ? {
                        backgroundImage: `url(${props.bgImage})`,
                    } : {}
                }
                ref={domRef}
            >
                <section
                    className={
                        (props.innerClassName || "")
                    }
                >
                    {props.children}
                </section>
            </div>
        )}/>
    );
};