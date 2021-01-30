import React, {Fragment} from "react";

import {Section, Spacer, Button} from "../components/components.js";
import diver from "../assets/diver.jpeg";
import hours from "../assets/hours.png";

export const Home = () => (
    <Fragment>
        <Section bgImage={diver} innerClassName="xJumbotronHeight xSectionPadding pLeftNone pRightNone">
            <div className="xSectionPadding dInlineBlock bg2Light br1 taCenter">
                <h1 className="fs6 fwBold pBottom1">Your diving adventure starts here</h1>
                <h2 className="fs2 pBottom1">Explore a whole new world; right here in the gorgeous Pacific Northwest!</h2>
                <Button to="/classes" className="mRight1" wide>
                    Take a class
                </Button>
                <Button to="/equipment" wide>
                    Browse our inventory
                </Button>
            </div>
        </Section>

        <Spacer/>

        <Section innerClassName="bg1 c2 xSectionPadding br1 bs1 taCenter">
            <h3 className="fs5 fwBold pBottom1">Hours</h3>
            <p className="fs2 w1 mAuto pBottom1">
                We have returned to regular hours, although shorter than they used to be! No appointments are necessary, but please remember to bring your facemask with you, as they are required to enter the store. Thank you for supporting your local dive shop! We appreciate you more than you know!
            </p>
            <img src={hours} alt="Hours" className="mwFull"/>
        </Section>

        <Spacer/>

        <Section>
            Learn to dive
        </Section>
    </Fragment>
);