import discoverScuba from "./assets/courses/discover-scuba.png";
import openWater from "./assets/courses/open-water.jpeg";
import divemaster from "./assets/courses/divemaster.jpeg";

export const database = {
    courses: [
        {
            name: "Discover SCUBA",
            description: "Get your feet wet here, without committing to a certification course.",
            img: discoverScuba
        }, {
            name: "Open Water",
            description: "After completing this course (including 4 dives), you'll be a certified PADI diver.",
            img: openWater
        }, {
            name: "Divemaster & Beyond",
            description: "Take your skills to the professional level; learn from the best!",
            img: divemaster
        }
    ]
};