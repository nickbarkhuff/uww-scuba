import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

import {App} from "./App.js";
import "./style/a-main.css";
import "./style/b-1200px.css";
import "./style/c-900px.css";
import "./style/d-600px.css";
import "./style/e-accessibility.css";

import {favicon} from "../shared/assets.js";

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
