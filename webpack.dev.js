const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    overlay: true,
    host: "0.0.0.0",
    port: "8080",
    public: "localhost:8080"
  }
});
