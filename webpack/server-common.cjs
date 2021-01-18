const path = require("path");
const nodemon = require("nodemon-webpack-plugin");
const externals = require("webpack-node-externals");

module.exports = {
	entry: "./src/server/server.js",
	target: "node",
	output: {
		filename: "start.js",
		path: path.join(__dirname, "../build")
	},
	plugins: [
		new nodemon()
	],
	externals: [externals()]
};
