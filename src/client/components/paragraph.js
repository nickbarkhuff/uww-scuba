import React from "react";

export const P = (props) => {
    return (
        <p className={
            "varParagraphPadding mNone "
            + (props.noTopPadding ? "ptopNone " : "")
            + (props.noBottomPadding ? "pbottomNone " : "")
            + (props.className || "")
        }>
            {props.children}
        </p>
    )
};