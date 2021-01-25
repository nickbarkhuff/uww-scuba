import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => {
    const button = (
        <button
            className="varButton c0 bg4 fs2 cursorPointer bNone"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );

    return props.to ? (
        <Link to={props.to} className="c0">
            {button}
        </Link>
    ) : button;
};
