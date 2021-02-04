import {useContext} from "react";

import {ObserverContext} from "./ObserverContext.js";

export const useObserver = () => {
    useContext(ObserverContext);
};