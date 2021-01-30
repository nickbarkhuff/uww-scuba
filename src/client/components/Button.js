import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => (
    <Link
        to={props.to}
        className={
            "bg5 c1 dInlineBlock br1 fs2 pButton "
            + "bsButtonUp_hover bsButtonDown_active transitionTransformButton "
            + "transformTranslateYButton_hover transformTranslateYReset_active transitionTransformReset_active "
            + (props.className || "")
        }
    >
        {props.children}
    </Link>
);