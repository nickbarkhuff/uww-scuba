import React from "react";

export const SquareImage = (props) => {
    return (
        <div className={props.zoom ? "ZoomOnHoverParent" : ""}>
            <div
                className={
                    "bgSizeCover bgPositionCenter pbFull "
                    + (props.zoom ? "ZoomOnHoverChild" : "")
                }
                style={{backgroundImage: `url(${props.src})`}}
            />
        </div>
    );
};