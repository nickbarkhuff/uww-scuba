import React from "react";

export const Section = (props) => {
    return (
        <div className={
            ""
            + (props.full ? "" : "varGutters ")
        }>
            <div
                className={
                    ""
                    + (props.full ? "varGutters " : "varSectionRadius ")
                    + (props.bg === "white" ? "c2 bg2 " : "")
                    + (props.bg === "black" ? "bg3 " : "")
                    + (props.bg === "red" ? "bg4 " : "")
                }
                style={
                    props.bgImage ? {
                        backgroundImage: `url(${props.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: props.bgPosition || "center",
                        backgroundRepeat: "no-repeat"
                    } : {}
                }
            >
                <div
                    className={
                        ""
                        + (props.slim ? "varSectionPaddingSlim " : "varSectionPadding ")
                        + (props.className)
                    }
                    style={
                        props.full || !(props.bg || props.bgImage) ? {
                            paddingLeft: 0,
                            paddingRight: 0
                        } : {}
                    }
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};