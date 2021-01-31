import React, {Fragment} from "react";

import {Section, Spacer} from "../components/components.js";
import diver from "../assets/diver.jpeg";

export const Home = () => (
    <Fragment>
        <Section innerClassName="JumbotronHeight pt2 pb2" bgImage={diver}>
            <span className="bg2Light dInlineBlock p2 taCenter br1">
                <h1 className="fs4 pb1 fwBold">Your diving adventure starts here</h1>
                <p className="fs2">Explore a whole new world, right here in the Pacific Northwest!</p>
            </span>
        </Section>
    </Fragment>
);