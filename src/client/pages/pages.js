import React from "react";

import {Home} from "./Home.js";
import {Classes} from "./Classes.js";
import {Equipment} from "./Equipment.js";
import {Schedule} from "./Schedule.js";
import {Staff} from "./Staff.js";

export const pages = [
    {
        name: "Home",
        path: "/",
        content: <Home/>
    }, {
        name: "Classes",
        path: "/classes",
        content: <Classes/>
    }, {
        name: "Equipment",
        path: "/equipment",
        content: <Equipment/>
    }, {
        name: "Schedule",
        path: "/schedule",
        content: <Schedule/>
    }, {
        name: "Staff",
        path: "/staff",
        content: <Staff/>
    }
];