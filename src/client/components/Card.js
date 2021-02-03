import React from "react";

export const Card = (props) => {
    if(props.style === "imgFirst"){
        return (
            <div className="taCenter">
                <div className="pb1">
                    <div className="ZoomOnHoverParent">
                        <img className="ZoomOnHoverChild mwFull" src={props.img} alt={props.imgAlt || props.title}/>
                    </div>
                </div>
                <div className="fs3 pb1 fwBold">{props.title}</div>
                <div className="fs2 w2 dInlineBlock">{props.description}</div>
            </div>
        );
    }
    else{
        return (
            <div className="taCenter bg1 c2 p2 br1 bs1">
                <div className="fs3 pb1">{props.title}</div>
                <div className="fs2 pb1 fsItalic">{props.subtitle}</div>
                <div className="pb1">
                    <img className="wFull" src={props.img} alt={props.imgAlt || props.title}/>
                </div>
                <div className="fs1 Clamp Clamp5 taJustify">{props.description}</div>
            </div>
        );
    }
};