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
import discover from "./assets/classes/discover-scuba.png";
import open from "./assets/classes/open-water.jpeg";
import divemaster from "./assets/classes/divemaster.jpeg";
import sunset from "./assets/sunset.jpeg";

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
						We have returned to regular hours, although shorter than they used to be! No appointments are necessary, but please remember to bring your facemask with you, as they are required to enter the store. Thank you for supporting your local dive shop! We appreciate you more than you know!
					</P>
					<P noBottomPadding>
						<img className="mwFull" src={hours} alt="Hours"/>
					</P>
				</Section>

				<Spacer/>

				{/* Learn to dive */}
				<Section>
					<P className="fs5" noTopPadding>Learn to dive with us!</P>
					<P className="fs2">
						When choosing a dive shop, the most important thing to consider is your instructors. SCUBA is a dangerous sport, so you'll need to learn the do's and don'ts under close supervision from people you can trust. At Under Water Works, <span className="fwBold">our top priority is safety</span>; you'll learn how to look out for yourself and others from instructors with years of experience under their belts.
					</P>

					<P></P>

					<div><div className="dInlineBlock fs4 bg4 c1" style={{padding: "1rem", marginBottom: "1rem"}}>Discover Scuba</div></div>
					<div style={{width: "40%", display: "inline-block"}}>
						<img src={discover} alt="Discover Scuba" style={{maxWidth: "90%"}}/>
					</div>
					<div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
						<P noTopPadding>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Tellus at urna condimentum mattis pellentesque id. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Non tellus orci ac auctor augue mauris augue neque. Turpis egestas integer eget aliquet nibh praesent. Enim lobortis scelerisque fermentum dui. Et netus et malesuada fames ac turpis egestas sed. Turpis massa tincidunt dui ut ornare lectus sit. Leo duis ut diam quam nulla porttitor massa id neque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Senectus et netus et malesuada fames ac turpis egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Neque ornare aenean euismod elementum nisi quis eleifend.</P>
						<P>Id neque aliquam vestibulum morbi blandit cursus risus at. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Integer quis auctor elit sed vulputate mi sit amet mauris. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Netus et malesuada fames ac. Sed augue lacus viverra vitae congue eu consequat ac. Euismod in pellentesque massa placerat duis ultricies lacus sed. Arcu felis bibendum ut tristique. Velit euismod in pellentesque massa placerat. Eget est lorem ipsum dolor sit amet consectetur. Porta nibh venenatis cras sed felis eget velit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu non odio euismod lacinia at quis risus sed.</P>
					</div>

					<P></P>
					<P></P>

					<div style={{textAlign: "right"}}><div className="dInlineBlock fs4 bg4 c1" style={{padding: "1rem", marginBottom: "1rem"}}>Open Water</div></div>
					<div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
						<P noTopPadding>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Tellus at urna condimentum mattis pellentesque id. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Non tellus orci ac auctor augue mauris augue neque. Turpis egestas integer eget aliquet nibh praesent. Enim lobortis scelerisque fermentum dui. Et netus et malesuada fames ac turpis egestas sed. Turpis massa tincidunt dui ut ornare lectus sit. Leo duis ut diam quam nulla porttitor massa id neque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Senectus et netus et malesuada fames ac turpis egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Neque ornare aenean euismod elementum nisi quis eleifend.</P>
						<P>Id neque aliquam vestibulum morbi blandit cursus risus at. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Integer quis auctor elit sed vulputate mi sit amet mauris. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Netus et malesuada fames ac. Sed augue lacus viverra vitae congue eu consequat ac. Euismod in pellentesque massa placerat duis ultricies lacus sed. Arcu felis bibendum ut tristique. Velit euismod in pellentesque massa placerat. Eget est lorem ipsum dolor sit amet consectetur. Porta nibh venenatis cras sed felis eget velit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu non odio euismod lacinia at quis risus sed.</P>
					</div>
					<div style={{width: "40%", display: "inline-block", textAlign: "right"}}>
						<img src={open} alt="Discover Scuba" style={{maxWidth: "90%"}}/>
					</div>

					<P></P>
					<P></P>

					<div><div className="dInlineBlock fs4 bg4 c1" style={{padding: "1rem", marginBottom: "1rem"}}>Divemaster</div></div>
					<div style={{width: "40%", display: "inline-block"}}>
						<img src={divemaster} alt="Discover Scuba" style={{maxWidth: "90%"}}/>
					</div>
					<div style={{width: "60%", display: "inline-block", verticalAlign: "top"}}>
						<P noTopPadding>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis bibendum. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Tellus at urna condimentum mattis pellentesque id. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Non tellus orci ac auctor augue mauris augue neque. Turpis egestas integer eget aliquet nibh praesent. Enim lobortis scelerisque fermentum dui. Et netus et malesuada fames ac turpis egestas sed. Turpis massa tincidunt dui ut ornare lectus sit. Leo duis ut diam quam nulla porttitor massa id neque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Senectus et netus et malesuada fames ac turpis egestas sed. Auctor urna nunc id cursus metus aliquam eleifend. Neque ornare aenean euismod elementum nisi quis eleifend.</P>
						<P>Id neque aliquam vestibulum morbi blandit cursus risus at. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Integer quis auctor elit sed vulputate mi sit amet mauris. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Netus et malesuada fames ac. Sed augue lacus viverra vitae congue eu consequat ac. Euismod in pellentesque massa placerat duis ultricies lacus sed. Arcu felis bibendum ut tristique. Velit euismod in pellentesque massa placerat. Eget est lorem ipsum dolor sit amet consectetur. Porta nibh venenatis cras sed felis eget velit. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu non odio euismod lacinia at quis risus sed.</P>
					</div>

					<P className="taRight" noBottomPadding>
						<Button to="/classes">All our courses</Button>
					</P>
				</Section>

				<Spacer/>

				{/* Fun dive days */}
				<Section className="taCenter c1 fs2" bgImage={sunset} full>
					<div className="bg3Light br1" style={{padding: "1rem"}}>
						<P className="fs6">FUN DIVE DAYS!</P>
						<P>We at Under Water Works love diving, and specifically love diving in the Pacific Northwest, but we understand that it can be challenging to plan and organize everything for a day of diving.  We're here to help! We're hosting a monthly Fun Dive Day, at different dive sites around the Pacific Northwest!  We will  handle logistics like dive site planning and briefing, emergency equipment, and help with things like proper weighting.</P>
						<P>If you don't have a dive buddy, we will help to connect you to another diver up for the Fun Dive, or we will go out diving with you.  There is no charge for joining, all we ask is that you rent any equipment you need from Under Water Works, and that you tip your staff leaders, if you feel their service was deserving of it.  The dates, times and locations of the fun dives are below.</P>
						<P>January 23rd / Location TBD / 10am - 2pm</P>
						<P>February 27th / Location TBD / 10am - 2pm</P>
						<P>March 20th / Location TBD / 10am - 2pm</P>
						<P noBottomPadding>
							<Button>Sign up</Button>
						</P>
					</div>
				</Section>

				<Spacer/>

				{/* Our team */}
				<Section>
					<P className="fs5" noTopPadding>Our team</P>
					<div className="fs2">
						<P>Under Water Works was opened in 1975, by Jerry and Hilde Rood. They first began by teaching classes at Tigard High School, and opened the retail shop shortly afterwards. Hilde owned Under Water Works for forty years, and sold it in 2015 to Gretchen Slack.</P>
						<P>At Under Water Works, we are are passionate about making your diving experience as good as it can be! We love scuba diving, and are excited to share it with you. Whether you're interested in learning to dive, continuing your diving education, purchasing equipment, or are wanting information about dive travel, we would love to share any information we have with you!</P>
						<P>We believe in an honest and straight forward approach to diving. Our PADI Instructors will teach you the information you need to be a safe, and independent diver. If you're looking to purchase equipment, we will strive to find what will work best for you, and the type of diving you love.</P>
						<P>Come in, and meet our staff, and check out our shop!</P>
					</div>
					<div className="dFlex jcSpaceBetween varParagraphPadding">
						<Card
							title={<span>Gretchen <span className="fwBold">Slack</span></span>}
							subtitle="Owner & Training Director"
							img={gretchen}
							content="I started diving in 2003, taking my Basic Open Water Diver training here at Under Water Works. While not initially sold on the idea of Scuba Diving, by the time I took my first breath underwater, I was hooked, and have had some amazing experiences underwater since! By far the majority of my diving has been in the Pacific Northwest, and even after visiting several warm water locations, it is still my favourite place to dive! The life in the Pacific Northwest is amazingly beautiful and abundant, and I continue to have new and unique experiences, even at dive sites I've visited hundreds of times."
						/>
						<Card
							title={<span>Dave <span className="fwBold">Ishmael</span></span>}
							subtitle="Service Technician"
							img={dave}
							content="As a child I learned of Scuba Diving by watching Sea Hunt and Jacques Cousteau TV programs. I decided as a boy I wanted to become a professional diver and explore the underwater world. I became certified as a NAUI Scuba Diver in 1976 and worked my way up the NAUI ranks. In 1986 I became a PADI Instructor, and have also been a Certified Equipment Technician for over 30 years. My diving has taken me to the Caribbean, Mexico, Hawaii, and Canada, although my favorite dives have been here in the Pacific Northwest."
						/>
						<Card
							title={<span>David <span className="fwBold">Frye</span></span>}
							subtitle="Master Scuba Diver"
							img={david}
							content="From an early age I have enjoyed being in, on, and around water. As a result, I have participated in many water related activities: competitive swimming, water polo, lifeguard, Water Safety Instructor, freediver, scuba diver, scuba instructor, and boat captain. Soon after being certified as a PADI Open Water Diver, I found that I wasn't able to dive as often as I might like so I quickly took my continuing education classes of Enriched Air Nitrox, Advanced Open Water, and Rescue diver. I still wasn’t diving enough and that had me dreaming about the future and how to dive more often."
						/>
					</div>
					<P className="taRight" noBottomPadding>
						<Button to="/staff">See the rest</Button>
					</P>
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
				.sort((a, b) => (a.priority || 0) < (b.priority || 0) ? 1 : -1)
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
