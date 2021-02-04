import React from "react";

import {ObserverContext} from "./ObserverContext.js";

export const ObserverWrapper = (props) => {
    return (
        <ObserverContext.Provider value={null}>
            {props.children}
        </ObserverContext.Provider>
    );
};