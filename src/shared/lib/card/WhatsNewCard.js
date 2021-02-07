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

    const typeColor = {
        [types["blog"]]: "cWhatsNewBlog",
        [types["video"]]: "cWhatsNewVideo",
        [types["item"]]: "cWhatsNewItem",
        [types["class"]]: "cWhatsNewClass",
        [types["dive"]]: "cWhatsNewDive"
    }[props.type];

    const typeName = {
        [types["blog"]]: "Blog Post",
        [types["video"]]: "YouTube Video",
        [types["item"]]: "Inventory Item",
        [types["class"]]: "Upcoming Class",
        [types["dive"]]: "Fun Dive Day"
    }[props.type];

    return (
        <div className={"ZoomOnHover taCenter bg2 c1 br1 p1 hFull " + boxShadow}>
            <div className={"pb1"}>
                <SquareImage src={props.image} rounded/>
            </div>
            <h4 className={"pb1 fwBold fStyleItalic " + typeColor}>{typeName}</h4>
            <h3 className={"pb1 fs2 fwBold"}>{props.name}</h3>
            <p className={"fs1"}>{props.description}</p>
        </div>
    );
};