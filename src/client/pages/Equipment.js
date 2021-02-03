import React, {Fragment} from "react";

export const Equipment = () => (
    <Fragment>
        <div className="SectionSpacing"/>
        <div className="Gutters">
            <section className="bg1 p2 br1 bs1 c2">
                <h2 className="fs4 taCenter pb1">Equipment</h2>
                <div className="taJustify">
                    <p className="pb1">
                        You have four equipment related services: buying, renting, maintenance, and tank fills (at least, I assume you fill tanks, there's no info about it on your site). Since these probably make up a large portion of your bottom line, having a page where users can easily browse everything you offer is going to be the best bang-for-your-buck improvement. This is even more important because of coivd: no one wants to go into a brick-and-mortar store unless they are sure they will get something out of it. If a user can look on your website and see that you carry a particular product, or can do a particular service, they'll be much more likely to actually come in, vs. going to another dive shop.
                    </p>
                    <p className="pb1">
                        Ideally, you would have your entire inventory on here, complete with up-to-date information and at least one high-quality image of each product. This will take a lot of time, but creating this catalog is one of the services I can offer you, if you choose to hire me as your developer and marketing expert.
                    </p>
                    <p className="pb1">
                        The next step after that would be to allow users to actually order products online, either through shipping or in-store pickup. That means you would have to have someone fulfilling these online orders, which is itself a lot of work, but it is a potential future option if you are interested.
                    </p>
                    <p>
                        Since the other three services (besides buying) don't require all this cataloging, building out those first would be pretty simple. You could list the equipment you rent out, what maintenance work you can do, and the types of gas you can fill. Again, promotional offers can help you make more sales, especially when it comes to first time customers: you could offer packages, such as discounting rental rates when someone signs up for their first class.
                    </p>
                </div>
            </section>
        </div>
    </Fragment>
);