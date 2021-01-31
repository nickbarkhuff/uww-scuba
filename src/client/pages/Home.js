import React, {Fragment} from "react";

import {Section, Spacer, Button, YouTubeEmbed, IsVisible} from "../components/components.js";
import {database} from "../database.js";
import diver from "../assets/diver.jpeg";
import hours from "../assets/hours.png";
import sunset from "../assets/sunset.jpeg";

export const Home = () => (
    <Fragment>
        <Section
            bgImage={diver}
            outerClassName="bgSizeCover"
            innerClassName="xJumbotronHeight xSectionPadding pLeftNone pRightNone"
            noFade
        >
            <IsVisible render={(isVisible, domRef) => (
                <div
                    className={
                        "xSectionPadding dInlineBlock bg2Light br1 taCenter xFadeIn "
                        + (isVisible ? "xFadeInTrigger" : "")
                    }
                    ref={domRef}
                >
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
            )}/>
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
            <div className="w1 mAuto">
                <YouTubeEmbed className="pBottom1" src="https://www.youtube.com/embed/Io1OF2OkTWY"/>
                <p>
                    (This is just a placeholder, of course. A video about 1 or 2 minutes long introducing your shop will put a human face on your business, and let potential customers see the store without having to actually come in. This is especially important because of covid. The better the quality of the video, the more trustworthy your brand will be.)
                </p>
            </div>
        </Section>

        <Spacer/>

        <Section outerClassName="bg1" innerClassName="c2 xSectionPadding pLeftNone pRightNone">
            <h3 className="fs5 pBottom1 fwBold">What's new?</h3>
            <p>
                Blog posts, YouTube videos, new inventory items, classes starting soon, upcoming Fun Dive Days, any new content to show customers
            </p>
        </Section>

        <Spacer/>

        <Section>
            <h3 className="fs5 pBottom1 fwBold">Learn to dive with us!</h3>
            <p className="fs2 pBottom2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis. Tellus integer feugiat scelerisque varius morbi enim nunc. Fringilla est ullamcorper eget nulla facilisi. Mus mauris vitae ultricies leo integer malesuada nunc. Et malesuada fames ac turpis egestas sed. Arcu dictum varius duis at. Diam quis enim lobortis scelerisque fermentum dui. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.
            </p>
            <div className="pBottom2">
                <div className="dFlex xCoursesGapNegative xCoursesDirection">
                    {database.courses.map(course => (
                        <div className="flex1 taCenter xCoursesGap">
                            <div className="pBottom1">
                                <div className="xZoomOnHoverParent dFlex jcCenter">
                                    <img src={course.img} alt={course.name} className="xZoomOnHoverChild mwFull dBlock"/>
                                </div>
                            </div>
                            <h4 className="fs3 fwBold pBottom1">{course.name}</h4>
                            <p className="mAuto w2">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="taRight">
                <Button to="/classes">See all classes</Button>
            </div>
        </Section>

        <Spacer/>

        <Section bgImage={sunset} outerClassName="bgSizeCover bgPositionCenter">
            <div style={{minHeight: "500px"}}>
                foobar
            </div>
        </Section>
    </Fragment>
);