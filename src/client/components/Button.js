import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => (
    <div
        className={
            "ButtonParent "
            + (props.block ? "dBlock" : "dInlineBlock")
        }
    >
        <Link
            className={
                "ButtonChild bg4 c1 p1 br1 fs2 fwBold "
                + (props.block ? "dBlock" : "dInlineBlock")
            }
            to={props.to}
        >
            {props.children}
        </Link>
    </div>
);