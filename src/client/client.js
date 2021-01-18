import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Helmet} from "react-helmet";
import favicon from "./assets/favicon.png";
import App from "./app.js";
import "./style.css";

ReactDOM.render(
	(
		<Router>
			<Helmet titleTemplate="UWW | %s">
				<link rel="icon" href={favicon}/>
			</Helmet>
			<App/>
		</Router>
	),
	document.getElementById("root")
);

if(import.meta.webpackHot)
	import.meta.webpackHot.accept();