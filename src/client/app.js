import React, {Fragment} from "react";
import {Switch, Route, Link, useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";
import {Section, Spacer, Wrapper} from "./components/components.js";
import scuba from "./assets/scuba.png";
import logo from "./assets/logo.png";

const pages = [
	{
		name: "Home",
		path: "/",
		priority: -1,
		content: (
			<Fragment>
				<Section className="varJumbotronHeight" bgImage={scuba} bgPosition="top" full>
					<h1>Your diving adventure begins here</h1>
					<p>
						foobar
					</p>
					<p>
						<button>Take a class</button>
						<button>Contact us</button>
					</p>
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
		<Section className="dFlex aiCenter" bg="white" slim full>
			<div className="flex1">
				<Link to="/">
					<img className="varLogoHeight" alt="Logo" src={logo}/>
				</Link>
			</div>
			<div>
				{pages.map((page, i) => (
					<Fragment key={page.path}>
						<Link to={page.path} class={
							"tdNone cInherit "
							+ (useLocation().pathname === page.path ? "fwBold " : "")
						}>
							{page.name}
						</Link>
						{i < pages.length - 1 ? " | " : ""}
					</Fragment>
				))}
			</div>
		</Section>

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

		<Spacer push/>

		<Section className="taCenter" bg="black" full>
			© {new Date().getFullYear()}, Under Water Works INC
		</Section>
	</Wrapper>
);

export default App;
