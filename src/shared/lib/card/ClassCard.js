import React from "react";

import {SquareImage} from "./SquareImage.js";

export const ClassCard = (props) => {
    return (
        <div className={"taCenter"}>
            <div className={"pb1"}>
                <SquareImage src={props.image} zoom rounded/>
            </div>
            <div>
                <h3 className={"pb1 fs3 fwBold"}>{props.name}</h3>
                <p className={"fs1"}>{props.description}</p>
            </div>
        </div>
    );
};