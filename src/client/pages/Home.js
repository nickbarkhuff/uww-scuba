import React, {Fragment} from "react";

import {Section, Spacer, Button, YouTubeEmbed} from "../components/components.js";
import diver from "../assets/diver.jpeg";
import hours from "../assets/hours.png";

export const Home = () => (
    <Fragment>
        <Section bgImage={diver} innerClassName="xJumbotronHeight xSectionPadding pLeftNone pRightNone">
            <div className="xSectionPadding dInlineBlock bg2Light br1 taCenter">
                <h1 className="fs6 fwBold pBottom1">Your diving adventure starts here</h1>
                <h2 className="fs2 pBottom1">
                    Explore a whole new world; right here in the gorgeous Pacific Northwest!
                </h2>
                <div className="dFlex xCtaButtonGapNegative xCtaButtonDirection">
                    <Button to="/classes" className="flex1 xCtaButtonGap">
                        Take a class
                    </Button>
                    <Button to="/equipment" className="flex1 xCtaButtonGap">
                        Browse our inventory
                    </Button>
                </div>
            </div>
        </Section>

        <Spacer/>

        <Section innerClassName="bg1 c2 xSectionPadding br1 bs1 taCenter">
            <h3 className="fs5 fwBold pBottom1">Hours</h3>
            <p className="fs2 pBottom1">
                Remember: facemasks are <span className="fwBold">required</span> to enter the store.
            </p>
            <img src={hours} alt="Hours" className="mwFull"/>
        </Section>

        <Spacer/>

        <Section innerClassName="taCenter">
            <h3 className="fs6 fwBold pBottom1">Welcome to UWW!</h3>
            <div className="xReducedWidth mAuto">
                <YouTubeEmbed className="pBottom1" src="https://www.youtube.com/embed/Io1OF2OkTWY"/>
                <p>
                    (This is just a placeholder, of course. A video about 1 or 2 minutes long introducing your shop will put a human face on your business, and let potential customers see the store without having to actually come in. This is especially important because of covid. The better the quality of the video, the more trustworthy your brand will be.)
                </p>
            </div>
        </Section>

        <Spacer/>

        <Section outerClassName="bg1" innerClassName="c2 xSectionPadding pLeftNone pRightNone">
            <h3 className="fs5 pBottom1 fwBold">What's new?</h3>
            <p>Blog posts, YouTube videos, new inventory items, classes starting soon, upcoming Fun Dive Days</p>
        </Section>
    </Fragment>
);