import React, {Fragment} from "react";

import {database} from "../database.js";

import {Button, ClassCard, StaffCard, WhatsNewCard, YouTubeEmbed, useObserver} from "../../shared/lib.js";
import {diver, hours, equipment} from "../../shared/assets.js";

const Jumbotron = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters JumbotronHeight pt2 pb2 bgPositionCenter bgSizeCover" style={{backgroundImage: `url(${diver})`}}>
            <section className={"bg2Light dInlineBlock taCenter p2 br1 FadeInRight " + trigger}>
                <h1 className="fs4 fwBold pb1" ref={ref}>Your diving adventure starts here</h1>
                <p className="fs2 pb2">Discover an exciting new world, right here in the Pacific Northwest!</p>
                <div className="CtaButtonsGapNegative CtaButtonsDirection dFlex">
                    <div className="CtaButtonsGapPositive flex1">
                        <Button to="/classes" block>Take a Class</Button>
                    </div>
                    <div className="CtaButtonsGapPositive flex1">
                        <Button to="#contact" style="transparent" block raw>Location & Contact Info</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Hours = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters">
            <section className={"bg1 c2 p2 taCenter br1 bs1"}>
                <div className={"FadeIn " + trigger}>
                    <h2 className="fs4 fwBold pb1" ref={ref}>Hours</h2>
                    <p className="fs2 pb2">
                        Face masks are <strong>required</strong> to enter the store.
                    </p>
                    <img className="mwFull" src={hours} alt="Hours"/>
                </div>
            </section>
        </div>
    );
};

const Video = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters">
            <section className={"taCenter FadeIn " + trigger}>
                <h2 className="fs4 fwBold pb1" ref={ref}>Welcome to UWW!</h2>
                <div className="dInlineBlock w1">
                    <YouTubeEmbed src="https://www.youtube.com/embed/Io1OF2OkTWY"/>
                    <p className="pt1">
                        (This is just a placeholder. A video about 1 or 2 minutes long introducing your shop will put a human face on your business, and let potential customers see the store without having to actually come in. This is especially important because of covid. The better the quality of the video, the more trustworthy your brand will be.)
                    </p>
                </div>
            </section>
        </div>
    );
};

const WhatsNew = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className={"Gutters bg1"}>
            <section className={"c2 pt2 pb2 FadeIn " + trigger}>
                <h2 className="fs4 pb1" ref={ref}>What's new?</h2>
                <p>Blog posts, YouTube videos, new inventory items, upcoming classes, Fun Dive Days</p>
            </section>
        </div>
    );
};

const Classes = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters">
            <section className={"fs2 FadeIn " + trigger}>
                <h2 className="fs4 pb1 taCenter fwBold" ref={ref}>Jump right in</h2>
                <p className="pb3 taJustify">
                    No matter your level of experience, we have something for you! Our PADI instructors are dedicated to teaching newcomers about this rewarding sport, and advancing the skills of those with many dives already logged. At Under Water Works, <strong>our top priority is always safety</strong>; you'll learn how to look out for yourself and others in a controlled, well-supervised environment.
                </p>
                <div className="pb3">
                    <div className="CoursesGapNegative CoursesDirection dFlex">
                        {database.classes.map(theClass => (
                            <div key={theClass.name} className="CoursesGapPositive flex1">
                                <ClassCard
                                    image={theClass.image}
                                    name={theClass.name}
                                    description={theClass.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="taRight">
                    <Button to="/classes">See All Classes</Button>
                </div>
            </section>
        </div>
    );
};

const Equipment = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className={"Gutters bgSizeCover bgPositionCenter"} style={{backgroundImage: `url(${equipment})`}}>
            <section className={"taCenter p2 FadeIn " + trigger}>
                <h2 className="fs4 fwBold pb1" ref={ref}>Is your equipment in good hands?</h2>
                <p className="fs3 pb2">Our technician has over 35 years of experience.</p>
                <Button to="/equipment">Maintenance Services</Button>
            </section>
        </div>
    );
};

const About = () => {
    const [sectionRef, sectionTrigger] = useObserver();
    const [cardsRef, cardsTrigger] = useObserver();
    return (
        <div className="Gutters">
            <section className={"fs2 taJustify FadeIn " + sectionTrigger}>
                <h2 className="fs4 pb1 taCenter fwBold" ref={sectionRef}>About us</h2>
                <p className="pb1">
                    Under Water Works was opened in 1975, by Jerry and Hilde Rood. They first began by teaching classes at Tigard High School, and opened the retail shop shortly afterwards. Hilde owned Under Water Works for forty years, and sold it in 2015 to Gretchen Slack.
                </p>
                <p className="pb1">
                    At Under Water Works, we are are passionate about making your diving experience as good as it can be! We love scuba diving, and are excited to share it with you. Whether you're interested in learning to dive, continue your diving education, purchase equipment, or get information about dive travel, we would love to share any information we have with you!
                </p>
                <p className="pb1">
                    We believe in an honest and straight forward approach to diving. Our PADI Instructors will teach you the information you need to be a safe, and independent diver. If you're looking to purchase equipment, we will strive to find what will work best for you, and the type of diving you love.
                </p>
                <p className="pb2">
                    Come in, and meet our staff, and check out our shop!
                </p>
                <div className="pb2">
                    <div className="StaffGapNegative StaffDirection dFlex">
                        {database.staff.map((person, i) => (
                            <div
                                key={person.firstName + person.lastName}
                                className={"StaffGapPositive flex1 mwNone"}
                                style={{transitionDelay: `.${i}s`}}
                            >
                                <StaffCard
                                    firstName={person.firstName}
                                    lastName={person.lastName}
                                    title={person.title}
                                    image={person.image}
                                    description={person.description.join(" ")}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="taRight">
                    <Button to="/staff">The team</Button>
                </div>
            </section>
        </div>
    );
};

const Info = () => {
    return (
        <div className="Gutters bg4" id="contact">
            <section className="pt2 pb2">
                <h2 className="fs4 fwBold taCenter">Info</h2>
            </section>
        </div>
    );
};

export const Home = () => {
    return (
        <Fragment>
            <Jumbotron/>
            <div className="SectionSpacing"/>
            <Hours/>
            <div className="SectionSpacing"/>
            <Video/>
            <div className="SectionSpacing"/>
            <WhatsNew/>
            <div className="SectionSpacing"/>
            <Classes/>
            <div className="SectionSpacing"/>
            <Equipment/>
            <div className="SectionSpacing"/>
            <About/>
            <div className="SectionSpacing"/>
            <Info/>
        </Fragment>
    );
};