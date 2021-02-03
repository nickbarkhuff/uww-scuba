import React from "react";

export const Card = (props) => (
    <div className="taCenter">
        <div className="pb1">
            <div className="ZoomOnHoverParent">
                <img className="ZoomOnHoverChild mwFull" src={props.img} alt={props.title}/>
            </div>
        </div>
        <div className="fs3 pb1 fwBold">{props.title}</div>
        <div className="fs2 w2 dInlineBlock">{props.description}</div>
    </div>
);