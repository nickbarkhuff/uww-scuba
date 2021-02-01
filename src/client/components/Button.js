import React from "react";
import {Link} from "react-router-dom";

export const Button = (props) => (
    <div className={props.className || ""}>
        <div className="ButtonParent">
            <Link className="ButtonChild dBlock bg4 c1 p1 br1 fs2 fwBold" to={props.to}>
                {props.children}
            </Link>
        </div>
    </div>
);