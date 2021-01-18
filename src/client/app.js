import React, {Fragment} from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import Section from "./components/section.js";
import NavItem from "./components/nav-item.js";
import {Home, Classes, Equipment, Schedule, Staff} from "./pages/pages.js";
import logo from "./assets/logo.png";

const App = (props) => {
	return (
		<div className="mhFull dFlex fdColumn">

			{/* Nav */}
			<Section className="dFlex aiCenter" bg="white" shadow full>
				<div className="flex1">
					<Link to="/">
						<img className="varLogoHeight" alt="Logo" src={logo}/>
					</Link>
				</div>
				<div>
					<NavItem to="/">Home</NavItem>
					<NavItem to="/classes">Classes</NavItem>
					<NavItem to="/equipment">Equipment</NavItem>
					<NavItem to="/schedule">Schedule</NavItem>
					<NavItem to="/staff" last>Staff</NavItem>
				</div>
			</Section>

			{/* Content */}
			<Switch>
				<Route path="/classes">
					<Helmet><title>Classes</title></Helmet>
					<Classes/>
				</Route>
				<Route path="/equipment">
					<Helmet><title>Equipment</title></Helmet>
					<Equipment/>
				</Route>
				<Route path="/schedule">
					<Helmet><title>Schedule</title></Helmet>
					<Schedule/>
				</Route>
				<Route path="/staff">
					<Helmet><title>Staff</title></Helmet>
					<Staff/>
				</Route>
				<Route path="/">
					<Helmet><title>Home</title></Helmet>
					<Home/>
				</Route>
			</Switch>

			{/* Footer */}
			<Section className="taCenter" bg="black" full last>
				© {new Date().getFullYear()}, Under Water Works INC
			</Section>

		</div>
	);
};

export default App;
