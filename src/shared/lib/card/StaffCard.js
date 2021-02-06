import React from "react";

import {SquareImage} from "./SquareImage.js";

export const StaffCard = (props) => {
    return (
        <div className={"taCenter bg2 c1 p2 br1 bs1"}>
            <h3 className={"Ellipsis fs3"}>{props.firstName} <span className={"fwBold"}>{props.lastName}</span></h3>
            <h4 className={"Ellipsis pb1 fs2 fStyleItalic"}>{props.title}</h4>
            <div className={"pb1"}>
                <SquareImage src={props.image}/>
            </div>
            <p className={"MultiLineEllipsis MultiLineEllipsis8 fs1"}>{props.description}</p>
        </div>
    );
};