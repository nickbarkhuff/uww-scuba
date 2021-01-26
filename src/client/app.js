import React, {Fragment} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Section, Spacer, Wrapper, Button, P, Card} from "./components/components.js";
import scuba from "./assets/diver.jpeg";
import logo from "./assets/logo.png";
import hours from "./assets/hours.png";
import gretchen from "./assets/staff/gretchen-slack.png";
import dave from "./assets/staff/dave-ishmael.png";
import david from "./assets/staff/david-frye.png";

const pages = [
	{
		name: "Home",
		path: "/",
		priority: -1,
		content: (
			<Fragment>

				{/* Jumbotron */}
				<Section className="varJumbotronHeight" bgImage={scuba} bgPosition="top" full>
					<div className="varSectionPadding bg3Light c1 br1 dInlineBlock taCenter">
						<P className="fs6 fwBold" noTopPadding>Your diving adventure starts here</P>
						<P className="fs2">
							Explore an exciting new world, right here in the gorgeous Pacific Northwest!
						</P>
						<P noBottomPadding>
							<Button to="/classes">Take a class</Button>
						</P>
					</div>
				</Section>

				<Spacer/>

				{/* Hours */}
				<Section className="taCenter" bg="white" shadow>
					<P className="fs5 fwBold" noTopPadding>Hours</P>
					<P className="fs2" reduced>
						We have returned to regular hours, although shorter than they used to be! No appointments are necessary, but please remember to bring your facemask with you, as they are required to enter the store.  Thank you for supporting your local dive shop!  We appreciate you more than you know!
					</P>
					<P noBottomPadding>
						<img className="mwFull" src={hours} alt="Hours"/>
					</P>
				</Section>

				<Spacer/>

				{/* Learn to dive */}
				<Section>Learn to dive</Section>

				<Spacer/>

				{/* Fun dive days */}
				<Section bg="white" full>Fun dive days</Section>

				<Spacer/>

				{/* Our team */}
				<Section>
					<P className="fs5" noTopPadding>Our team</P>
					<div className="dFlex jcSpaceBetween">
						<Card
							title={<span>Gretchen <span className="fwBold">Slack</span></span>}
							subtitle="Owner & Training Director"
							img={gretchen}
							content="I started diving in 2003, taking my Basic Open Water Diver training here at Under Water Works.  While not initially sold on the idea of Scuba Diving, by the time I took my first breath underwater, I was hooked, and have had some amazing experiences underwater since!  By far the majority of my diving has been in the Pacific Northwest, and even after visiting several warm water locations, it is still my favourite place to dive!  The life in the Pacific Northwest is amazingly beautiful and abundant, and I continue to have new and unique experiences, even at dive sites I've visited hundreds of times."
						/>
						<Card
							title={<span>Dave <span className="fwBold">Ishmael</span></span>}
							subtitle="Service Technician"
							img={dave}
							content="As a child I learned of Scuba Diving by watching Sea Hunt and Jacques Cousteau TV programs.  I decided as a boy I wanted to become a professional diver and explore the underwater world.  I became certified as a NAUI Scuba Diver in 1976 and worked my way up the NAUI ranks. In 1986 I became a PADI Instructor, and have also been a Certified Equipment Technician for over 30 years.  My diving has taken me to the Caribbean, Mexico, Hawaii, and Canada, although my favorite dives have been here in the Pacific Northwest."
						/>
						<Card
							title={<span>Gretchen <span className="fwBold">Frye</span></span>}
							subtitle="Master Scuba Diver"
							img={david}
							content="From an early age I have enjoyed being in, on, and around water. As a result, I have participated in many water related activities: competitive swimming, water polo, lifeguard, Water Safety Instructor, freediver, scuba diver, scuba instructor, and boat captain. Soon after being certified as a PADI Open Water Diver, I found that I wasn't able to dive as often as I might like so I quickly took my continuing education classes of Enriched Air Nitrox, Advanced Open Water, and Rescue diver. I still wasn’t diving enough and that had me dreaming about the future and how to dive more often."
						/>
					</div>
				</Section>

			</Fragment>
		)
	},
	{
		name: "Classes",
		path: "/classes",
		content: (
			<Fragment>
				<Spacer/>
				<Section>Classes</Section>
			</Fragment>
		)
	},
	{
		name: "Equipment",
		path: "/equipment",
		content: (
			<Fragment>
				<Spacer/>
				<Section>Equipment</Section>
			</Fragment>
		)
	},
	{
		name: "Schedule",
		path: "/schedule",
		content: (
			<Fragment>
				<Spacer/>
				<Section>Schedule</Section>
			</Fragment>
		)
	},
	{
		name: "Staff",
		path: "/staff",
		content: (
			<Fragment>
				<Spacer/>
				<Section>Staff</Section>
			</Fragment>
		)
	}
];

const App = () => (
	<Wrapper>

		{/* Nav */}
		<Section className="dFlex aiCenter" bg="white" slim full>
			<div className="flex1">
				<Link to="/">
					<img className="varLogoHeight" alt="Logo" src={logo}/>
				</Link>
			</div>
			<div className="fs2">
				{pages.map((page, i) => (
					<Fragment key={page.path}>
						<Link to={page.path} className={
							"tdNone c0 "
							+ (useLocation().pathname === page.path ? "fwBold " : "")
						}>
							{page.name}
						</Link>
						{i < pages.length - 1 ? " | " : ""}
					</Fragment>
				))}
			</div>
		</Section>

		{/* Page Content */}
		<Switch>
			{[...pages]
				.sort((a, b) => (a.priority || 0) < (b.priority || 0))
				.map(page => (
					<Route key={page.path} path={page.path}>
						<Helmet><title>{page.name}</title></Helmet>
						{page.content}
					</Route>
				))}
		</Switch>

		{/* Footer */}
		<Spacer push/>
		<Section className="taCenter" bg="black" full>
			© {new Date().getFullYear()}, Under Water Works INC
		</Section>

	</Wrapper>
);

export default App;
