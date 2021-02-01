import React from "react";
import {Link} from "react-router-dom";

const styles = {
    solid: "bg4",
    transparent: "bgTransparent b1"
};

export const Button = (props) => {
    const linkClassName = (
        "ButtonChild c1 p1 br1 fwBold "
        + (props.small ? "fs1 " : "fs2 ")
        + (props.block ? "dFlex aiCenter jcCenter hFull " : "dInlineBlock ")
        + (styles[props.style] || styles["solid"])
    );

    return (
        <div className={
            "ButtonParent "
            + (props.block ? "dBlock hFull" : "dInlineBlock")
        }>
            {props.raw ? (
                <a className={linkClassName} href={props.to}>
                    {props.children}
                </a>
            ) : (
                <Link className={linkClassName} to={props.to}>
                    {props.children}
                </Link>
            )}
        </div>
    );
};