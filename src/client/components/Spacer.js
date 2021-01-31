import React from "react";

export const Spacer = (props) => (
    <div className={
        (props.push ? "flex1" : "xSectionSpacing")
    }>
        {props.children}
    </div>
);