import React, {Fragment} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Section, Spacer, Wrapper, Button, P, Card} from "./components/components.js";
import scuba from "./assets/diver.jpeg";
import logo from "./assets/logo.png";
import hours from "./assets/hours.png";

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
				<Section>
					<P className="fs5" noTopPadding>What's new</P>
					<Card></Card>
				</Section>

				<Spacer/>

				{/* Fun dive days */}
				<Section bg="white" full>Fun dive days</Section>

				<Spacer/>

				{/* Our team */}
				<Section>Our team</Section>

				<Spacer/>

				{/* Contact us */}
				<Section bg="red" full>Contact us</Section>

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
