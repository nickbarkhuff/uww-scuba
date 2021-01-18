const { merge } = require("webpack-merge");
const common = require("./server-common.cjs");

module.exports = merge(common, {
	mode: "production"
});
