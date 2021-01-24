import React from "react";
import {Section, Spacer, Wrapper} from "./components/components.js";
import scuba from "./assets/scuba.png";
import logo from "./assets/logo.png";

const App = () => (
	<Wrapper>
		<Section className="dFlex aiCenter" bg="white" slim full>
			<div className="flex1">
				<a href="/">
					<img className="varLogoHeight" alt="Logo" src={logo}/>
				</a>
			</div>
			<div>
				Items
			</div>
		</Section>

		<Section bgImage={scuba} full>
			<h1>Your diving adventure begins here</h1>
			<p>
				foobar
			</p>
			<p>
				<button>Take a class</button>
				<button>Contact us</button>
			</p>
		</Section>

		<Spacer/>

		<Section bg="white">Foo</Section>

		<Spacer/>

		<Section>Bar</Section>

		<Spacer/>

		<Section bg="red" full>Baz</Section>

		<Spacer push/>

		<Section bg="black" full>Footer</Section>
	</Wrapper>
);

export default App;
