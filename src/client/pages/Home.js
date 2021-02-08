import React, {Fragment} from "react";

import {database} from "../database.js";

import {Button, ClassCard, StaffCard, WhatsNewCard, YouTubeEmbed, useObserver} from "../../shared/lib.js";
import {diver, hours, equipment} from "../../shared/assets.js";

const Jumbotron = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters JumbotronHeight pt2 pb2 bgPositionCenter bgSizeCover" style={{backgroundImage: `url(${diver})`}}>
            <section className={"CtaDisplay bg1Light taCenter c2 p2 br1 FadeInRight " + trigger}>
                <span ref={ref}/>
                <h1 className="fs4 fwBold pb1">Your diving adventure starts here</h1>
                <p className="fs2 pb2">Discover an exciting new world, right here in the beautiful Northwest!</p>
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
        <div className="Gutters bg1 pt3 pb3">
            <section className={"bg2 c1 p2 taCenter br1 bs2"}>
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
            <section className={"c2 taCenter FadeIn " + trigger}>
                <h2 className="fs4 fwBold pb1" ref={ref}>Welcome to Pacific Watersports!</h2>
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
            <section className={"c2 pt3 pb3 FadeIn " + trigger}>
                <h2 className="fs4 pb2 fwBold taCenter" ref={ref}>What's new?</h2>
                <div className={"WhatsNewGapNegative WhatsNewDirection dFlex flexWrapWrap"}>
                    {database.whatsNew.map(item => (
                        <div className={"WhatsNewGapPositive WhatsNewItemWidth"}>
                            <WhatsNewCard {...item}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const Classes = () => {
    const [ref, trigger] = useObserver();
    return (
        <div className="Gutters">
            <section className={"c2 fs2 taCenter FadeIn " + trigger}>
                <h2 className="fs4 pb1 fwBold" ref={ref}>Jump right in</h2>
                <p className="pb2 w1 dInlineBlock">
                    No matter your level of experience, we have something for you! Our PADI instructors are dedicated to teaching newcomers about this rewarding sport, and advancing the skills of those with many dives already logged. At Pacific Watersports, <strong>our top priority is always safety</strong>; you'll learn how to look out for yourself and others in a controlled, well-supervised environment.
                </p>
                <div className="pb2">
                    <div className="CoursesGapNegative CoursesDirection dFlex">
                        {database.classes.map(theClass => (
                            <div key={theClass.name} className="CoursesGapPositive flex1">
                                <ClassCard {...theClass}/>
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
            <section className={"taCenter pt4 pb4 c2 FadeIn " + trigger}>
                <h2 className="fs4 fwBold pb1" ref={ref}>Is your equipment in good hands?</h2>
                <p className="fs3 pb2">Our technicians have years of experience.</p>
                <Button to="/equipment">Maintenance Services</Button>
            </section>
        </div>
    );
};

const About = () => {
    const [sectionRef, sectionTrigger] = useObserver();
    const [cardsRef, cardsTrigger] = useObserver(0.2);

    return (
        <div className="Gutters">
            <section className={"c2 fs2 taJustify FadeIn " + sectionTrigger}>
                <h2 className="fs4 pb1 taCenter fwBold" ref={sectionRef}>About us</h2>
                <p className="pb1">
                    The staff at Pacific Watersports is the finest you'll find anywhere.
                </p>
                <p className="pb1">
                    Our instructional team comprises of PADI Instructors and  PADI Dive Masters. The staff at Pacific Watersports has over 40 years experience in scuba diving and many of our instructors are Master Scuba Diver Trainers (MSDT). The store staff is also very experienced and they are always happy to use their knowledge to help customers make good choices whether shopping for equipment, looking to increase their training level or planning a dive trip. This brings us too our store Mission Statement: <strong>Let us help you, get what works best for you, no high pressure, just good honest sales, service and instruction.</strong>
                </p>
                <p className="pb2">
                    We all love, enjoy, have fun at what we do and we know that you will too.
                </p>
                <div className="pb2">
                    <div className="StaffGapNegative StaffDirection dFlex aiCenter" ref={cardsRef}>
                        {database.staff.map((person, i) => (
                            <div
                                key={person.firstName + person.lastName}
                                className={"StaffGapPositive StaffItemWidth flex1 mwNone FadeInRight " + cardsTrigger}
                                style={{transitionDelay: `.${i}s`}}
                            >
                                <StaffCard {...person}/>
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
            <section className="pt2 pb2 c2">
                <h2 className="fs4 fwBold taCenter">Info</h2>
            </section>
        </div>
    );
};

export const Home = () => {
    return (
        <Fragment>
            <Jumbotron/>
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