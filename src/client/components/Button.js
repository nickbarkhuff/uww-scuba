import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => (
    <div
        className={
            "xButton dInlineBlock "
            + (props.className || "")
        }
    >
        <Link
            to={props.to}
            className={
                "dBlock bg5 c1 br1 fs2 fwBold "
                + "xButtonPadding xButtonTransition "
                + "xButtonShadow_hover xButtonTransform_hover "
                + "xButtonShadow_active xButtonTransform_active xButtonTransition_active"
            }
        >
            {props.children}
        </Link>
    </div>
);