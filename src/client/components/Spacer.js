import React from "react";

export const Spacer = (props) => (
    <div className={
        "xSectionSpacing "
        + (props.push ? "flex1 " : "")
    }>
        {props.children}
    </div>
);