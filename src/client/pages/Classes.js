import React, {Fragment} from "react";

export const Classes = () => (
    <Fragment>
        <div className="SectionSpacing"/>
        <div className="Gutters">
            <section className="bg2 c1 p2 br1 bs1">
                <h2 className="fs4 taCenter pb1">Classes</h2>
                <div className="taJustify">
                    <p className="pb1">
                        Your current site has a lot of good information about classes, most of it can be copy-pasted here. But, laying it out in a more visually appealing way will make it easier for users to browse and learn about what you offer. Clicking on a class should reveal more details about it, like your current site, but should also display a schedule of when the next selected class is starting. This, combined with a call-to-action link to the contact form, will make it more likely that a user is going to send you a message asking for more details.
                    </p>
                    <p className="pb1">
                        After that, you need to respond to messages in a timely manner; if someone fills our your contact form but never gets a response, that could be the difference between getting a new customer or not.
                    </p>
                    <p>
                        If you track how many seats are available in each class, you could also display that here, and highlight classes that are almost full ("Only 3 seats remaining - sign up now!", for example). You could also run promotional offers and show that here too, especially during times when you know less people are signing up for classes, like during the winter.
                    </p>
                </div>
            </section>
        </div>
        <div className="SectionSpacing"/>
    </Fragment>
);