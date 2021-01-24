import React from "react";

export const Spacer = (props) => {
    return (
        <div className={
            "varSectionSpacing "
            + (props.push ? "flex1 " : "")
        }>
        </div>
    );
};
