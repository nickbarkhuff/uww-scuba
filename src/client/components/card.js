import React from "react";

export const Card = (props) => {
    return (
        <div className="varCardPadding bg2 c2 dInlineBlock taCenter bs1 br1" style={{maxWidth: "30%"}}>
            <div className="fs3">{props.title}</div>
            <div className="pbottom1 fs2 fstyleItalic">{props.subtitle}</div>
            <img className="pbottom1 mwFull" src={props.img} alt="Card image"/>
            <div style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "8",
                overflow: "hidden"
            }}>
                {props.content}
            </div>
        </div>
    );
};