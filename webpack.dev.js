const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
process.env.NODE_ENV = "development"; // needed for sass config
const sass = require("./webpack.sass");

const dev = {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    overlay: true,
    host: "0.0.0.0",
    port: "8080",
    public: "localhost:8080"
  }
};

module.exports = merge(common, dev, sass);
