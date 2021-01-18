import React, {Fragment} from "react";
import Section from "../components/section.js";
import scuba from "../assets/scuba.png";

const Home = () => {
	return (
		<Fragment>
			<Section>Main</Section>
			<Section bg="white">Hours</Section>
			<Section bgImage={scuba} overlay="0.5" full>
				<div style={{minHeight: "1000px"}}>
					Content
				</div>
			</Section>
		</Fragment>
	)
};

export default Home;
