import React from "react";

import {Home} from "./pages/Home.js";
import {Classes} from "./pages/Classes.js";
import {Equipment} from "./pages/Equipment.js";
import {Schedule} from "./pages/Schedule.js";
import {Staff} from "./pages/Staff.js";
import {Blog} from "./pages/Blog.js";

import {
    discoverScuba,
    openWater,
    divemaster,
    laurie,
    ken,
    jeri,
    advancedOpenWater,
    alki,
    pnw,
    sanJuan,
    computer,
    pugetSound,
    faceMask,
    redondoBeach,
    rescueDiver
} from "../shared/assets.js";

const whatsNewTypes = {
    "blog": 1,
    "video": 2,
    "item": 3,
    "class": 4,
    "dive": 5
};

export const database = {
    whatsNewTypes,
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
        image: discoverScuba
    }, {
        name: "Open Water",
        description: "After completing this class (including 4 dives), you'll be a certified PADI diver.",
        image: openWater
    }, {
        name: "Divemaster & Beyond",
        description: "Take your skills to the professional level; learn from the best!",
        image: divemaster
    }],
    staff: [{
        firstName: "Laurie",
        lastName: "Hannula",
        title: "Owner",
        description: [
            "Have lived my whole life in the Pacific Northwest and I really enjoy it here. I knew that the first time I went underwater that this was now going to be my new home away from home you might say. I completed my first step to the underwater adventure in 1977 at Clark College through Underwater Sports in Vancouver, WA. Before I finished my training I was already working at the dive center, I started out mending wetsuits. I took every possible type of training, purchased all my scuba equipment before my open water training dives and went to any seminar that was about diving that I could. I eventually was a full time employee and staff member of Underwater Sports. I then worked my way up to Assistant Instructor, and then took that very rewarding step as an Scuba Instructor in 1982.",
        ],
        image: laurie
    }, {
        firstName: "Ken",
        lastName: "Prentice",
        title: "Instructor",
        description: [
            "Growing up in the Pacific Northwest as one of the many baby boomers, like the rest of those fortunate few I was exposed to early television shows. Some of them were; Flipper, Voyage to the Bottom of the Sea, Sea Hunt and the most amazing Jacques Cousteau specials and his son Philip. With such influence in my youth I skin-dived in the bathtub, swimming pool, pond, river and horse trough; I had a great imagination. It was not until 1990 that I was exposed to my first scuba diving experience. I signed up for a Discover Scuba program; the first breath I took under water opened the most amazing door that any one can pass through. The realization that you don't have to go to the surface for a breath of air was great. I then certified as a PADI Open Water Diver at Pacific Watersports in 1991 and that's when I truly became addicted to compressed air, ok scuba diving. My diving addiction is a good and healthy sport. From that point on I knew that I wanted to become a professional in this sport. It has become a life changing experience so much that in 1995 I was certified as a PADI Instructor and closed my business shortly after that. I now have dedicated my life to my profession of scuba diving. I teach all levels of courses Open Water, Advanced, Rescue, Divemaster and many specialties. ",
        ],
        image: ken
    }, {
        firstName: "Jeri",
        lastName: "Moreira",
        title: "Dive Master",
        description: [
            "As the story goes it all started with seeing my father's dive gear. Of course, this was old school double hose, neoprene wet suit with no nylon inside or outside. Wow, I wanted to SCUBA dive however; I was only six years old. As time progressed my sister bought me a mask, fins and snorkel at age 12. I was hooked. I would snorkel in the rivers in Oakridge and yes, it was cold but I endured it. So when I was in high school my teacher was a SCUBA instructor and shared many stories of his adventures. I signed up for lessons and started diving in 1980 from a dive shop in Portland, Oregon. I was hooked for many years then got out of it since my kids were not interested in it. Many years later, I went to Hawaii for vacation, I thought to myself, I should go diving since I would be in paradise and all my previous dives were in the Great Pacific Northwest, which is still my preference. Wow, my first thought as I hit the water was WHY DID I STOP? As soon as I got back, I found Pacific Watersports, bought my dive gear and decided to continue my diving education where I left off, so I signed up to finish my Dive Master program. Now I can't get enough of diving. I would be happy even diving in a mud puddle. I love helping others learn to dive, be safe, and show them a whole another world that only a few get to experience. I LOVE IT!",
        ],
        image: jeri
    }],
    whatsNew: [{
        name: "Aqua Lung i770R Dive Computer",
        type: whatsNewTypes["item"],
        description: "Featuring ultra-bright TFT color screen and wireless Bluetooth connectivity",
        image: computer
    }, {
        name: "Kirby Morgan 300-038 EXO-BR Full Face Mask",
        type: whatsNewTypes["item"],
        description: "Cutting-edge full face mask technology",
        image: faceMask
    }, {
        name: "Our favorite dive spots in the Pacific Northwest",
        type: whatsNewTypes["blog"],
        description: "If you haven't visited these locations, you're missing out!",
        image: pnw
    }, {
        name: "Puget Sound Compilation",
        type: whatsNewTypes["video"],
        description: "See what our students found lurking just below the surface!",
        image: pugetSound
    }, {
        name: "Advanced Open Water",
        type: whatsNewTypes["class"],
        description: "Open to anyone with an Open Water certification",
        image: advancedOpenWater
    }, {
        name: "Rescue Diver",
        type: whatsNewTypes["class"],
        description: "Become a more confident and self-reliant diver - only a few seats remaining",
        image: rescueDiver
    }, {
        name: "Redondo Beach (De Moines, WA)",
        type: whatsNewTypes["dive"],
        description: "The calm surface and easy entry and exit at Redondo Beach make a most relaxing dive location",
        image: redondoBeach
    }, {
        name: "San Juan Islands (San Juan County, WA)",
        type: whatsNewTypes["dive"],
        description: "Stunningly beautiful, this archipelago features over 400 islands",
        image: sanJuan
    }, {
        name: "Alki Beach (Seattle, WA)",
        type: whatsNewTypes["dive"],
        description: "A stone’s throw from one of Seattle’s most famous beaches, Alki Beach Park is a fantastic shore dive for both beginners and experienced divers",
        image: alki
    }]
};