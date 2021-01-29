import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

import favicon from "./assets/favicon.png";
import {App} from "./components/components.js";
import "./style.css";

ReactDOM.render(
	(
		<BrowserRouter>
			<Helmet titleTemplate="UWW | %s">
				<link rel="icon" href={favicon}/>
			</Helmet>
			<App/>
		</BrowserRouter>
	),
	document.getElementById("root")
);

if(import.meta.webpackHot)
	import.meta.webpackHot.accept();
