import React, {Fragment} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Section, Spacer, Wrapper, Button} from "./components/components.js";
import scuba from "./assets/scuba.png";
import logo from "./assets/logo.png";

const pages = [
	{
		name: "Home",
		path: "/",
		priority: -1,
		content: (
			<Fragment>

				{/* Jumbotron */}
				<Section className="varJumbotronHeight" bgImage={scuba} bgPosition="top" full>
					<p className="fs6">
						Your diving adventure starts here
					</p>
					<p className="fs2">
						foobar
					</p>
					<p>
						<Button to="/classes">Take a class</Button>
					</p>
				</Section>

				<Spacer/>

				{/* Hours */}
				<Section bg="white">Hours</Section>

				<Spacer/>

				{/* Learn to dive */}
				<Section>Learn to dive</Section>

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
						<Link to={page.path} class={
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
