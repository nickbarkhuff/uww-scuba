import React from "react";
import {Section, Spacer, Wrapper} from "./components/components.js";
import scuba from "./assets/scuba.png";

const App = () => (
	<Wrapper>
		<Section bg="white" full>Nav</Section>

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
