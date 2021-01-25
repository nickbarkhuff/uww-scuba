import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => {
    const button = (
        <button
            className="varButton c1 bg4 fs2 br1 cursorPointer"
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
