import React from "react";

import {Home} from "./pages/Home.js";
import {Classes} from "./pages/Classes.js";
import {Equipment} from "./pages/Equipment.js";
import {Schedule} from "./pages/Schedule.js";
import {Staff} from "./pages/Staff.js";
import {Blog} from "./pages/Blog.js";

import {discoverScuba, openWater, divemaster, gretchenSlack, daveIshmael, davidFrye} from "../shared/assets.js";

export const database = {
    pages: [{
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
    }, {
        name: "Blog",
        path: "/blog",
        content: <Blog/>
    }],
    classes: [{
        name: "Discover SCUBA",
        description: "Get your feet wet, without committing to a certification class.",
        img: discoverScuba
    }, {
        name: "Open Water",
        description: "After completing this class (including 4 dives), you'll be a certified PADI diver.",
        img: openWater
    }, {
        name: "Divemaster & Beyond",
        description: "Take your skills to the professional level; learn from the best!",
        img: divemaster
    }],
    staff: [{
        first: "Gretchen",
        last: "Slack",
        title: "Owner & Training Director",
        description: [
            "I started diving in 2003, taking my Basic Open Water Diver training here at Under Water Works. While not initially sold on the idea of Scuba Diving, by the time I took my first breath underwater, I was hooked, and have had some amazing experiences underwater since! By far the majority of my diving has been in the Pacific Northwest, and even after visiting several warm water locations, it is still my favourite place to dive! The life in the Pacific Northwest is amazingly beautiful and abundant, and I continue to have new and unique experiences, even at dive sites I've visited hundreds of times.",
            "I 'grew up' at this shop, taking most of my classes from the other Instructors here, and working here, first part time, then full time, now owning and managing the shop. I am incredibly lucky to be surrounded by a strong and passionate staff of Instructors and Divemasters, and have met some of my closest friends through this shop. I became a Divemaster in 2009, and then continued on to get my Instructor rating in 2011. I hope that you decide to start or continue your diving education with us! All of the staff here are passionate about Pacific Northwest diving, and we're excited to introduce you to it!"
        ],
        img: gretchenSlack
    }, {
        first: "Dave",
        last: "Ishmael",
        title: "Service Technician",
        description: [
            "As a child I learned of Scuba Diving by watching Sea Hunt and Jacques Cousteau TV programs. I decided as a boy I wanted to become a professional diver and explore the underwater world. I became certified as a NAUI Scuba Diver in 1976 and worked my way up the NAUI ranks. In 1986 I became a PADI Instructor, and have also been a Certified Equipment Technician for over 30 years. My diving has taken me to the Caribbean, Mexico, Hawaii, and Canada, although my favorite dives have been here in the Pacific Northwest.",
            "I've been fortunate to be with Under Water Works for over 30 years. Between helping Gretchen with dive store operations, diving equipment repair and teaching Scuba diving, I've lived my passion. Please visit our dive store so we can show you our experience and professionalism, and we can get you on the road to exploring the under water world. "
        ],
        img: daveIshmael
    }, {
        first: "David",
        last: "Frye",
        title: "Master Scuba Diver",
        description: [
            "From an early age I have enjoyed being in, on, and around water. As a result, I have participated in many water related activities: competitive swimming, water polo, lifeguard, Water Safety Instructor, freediver, scuba diver, scuba instructor, and boat captain.",
            "Soon after being certified as a PADI Open Water Diver, I found that I wasn't able to dive as often as I might like so I quickly took my continuing education classes of Enriched Air Nitrox, Advanced Open Water, and Rescue diver. I still wasn’t diving enough and that had me dreaming about the future and how to dive more often.",
            "The plan I came up with involved becoming a Divemaster and then a scuba instructor in order to live and teach abroad. As that plan was realized, I spent two years traveling and working in Thailand, Hawaii, the Bahamas, and the Florida Keys before landing in the British Virgin Islands for about 18 months, and then another year in Hawaii.",
            "Having had the opportunity to dive in all kinds of conditions and locations, work with all types of students and dive professionals, try different types of gear, and experience several cultures around the world, I feel that I have a unique insight into the underwater world.",
            "I look forward to having you join me in the classroom, pool, or open water environment for your next scuba course so I may share some of these experiences with you."
        ],
        img: davidFrye
    }]
};