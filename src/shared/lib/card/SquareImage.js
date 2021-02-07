import React from "react";

export const SquareImage = (props) => {
    return (
        <div className={
            ""
            + (props.zoom ? "ofHidden " : "")
            + (props.rounded ? "br1 " : "")
        }>
            <div
                className={
                    "bgSizeCover bgPositionCenter pbFull "
                    + (props.zoom ? "ZoomOnHover " : "")
                    + (props.rounded ? "br1 " : "")
                }
                style={{backgroundImage: `url(${props.src})`}}
            />
        </div>
    );
};