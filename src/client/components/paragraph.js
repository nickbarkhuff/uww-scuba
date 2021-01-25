import React from "react";

export const P = (props) => {
    return (
        <p className={
            "varParagraphPadding "
            + (props.noTopPadding ? "ptopNone " : "")
            + (props.noBottomPadding ? "pbottomNone " : "")
            + (props.reduced ? "varParagraphReduced " : "")
            + (props.className || "")
        }>
            {props.children}
        </p>
    )
};