import React from "react";

export const Spacer = (props) => (
    <div className={props.expand ? "flex1" : "SectionSpacing"}/>
);