import React from "react";

export const Wrapper = (props) => {
    return (
        <div className="hFull ofAuto dFlex fdColumn ffSansSerif c1 bg1">
            {props.children}
        </div>
    );
};
