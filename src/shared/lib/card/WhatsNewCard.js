import React from "react";

import {database} from "../../../client/database.js";
import {SquareImage} from "./SquareImage.js";

export const WhatsNewCard = (props) => {
    const types = database.whatsNewTypes;

    const boxShadow = {
        [types["blog"]]: "bsWhatsNewBlog",
        [types["video"]]: "bsWhatsNewVideo",
        [types["item"]]: "bsWhatsNewItem",
        [types["class"]]: "bsWhatsNewClass",
        [types["dive"]]: "bsWhatsNewDive"
    }[props.type];

    return (
        <div className={"ZoomOnHoverChild taCenter br1 p1 hFull " + boxShadow}>
            <div className={"pb1"}>
                <SquareImage src={props.image}/>
            </div>
            <h3 className={"pb1 fs2 fwBold"}>{props.name}</h3>
            <p className={"fs1"}>{props.description}</p>
        </div>
    );
};