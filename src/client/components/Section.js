import React from "react";

export const Section = (props) => {
    return (
        <div
            className={
                "pGutters "
                + (props.outerClassName || "")
            }
            style={
                props.bgImage ? {
                    backgroundImage: `url(${props.bgImage})`
                } : {}
            }
        >
            <section className={props.innerClassName || ""}>
                {props.children}
            </section>
        </div>
    );
};