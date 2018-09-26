const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const baseProd = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin(["dist"])]
});

const umd = {
  output: {
    filename: "[name].umd.js",
    libraryExport: "default",
    libraryTarget: "umd"
  }
};

module.exports = [baseProd, merge(baseProd, umd)];
