const merge = require("webpack-merge");
const common = require("./webpack.common");
const sass = require("./webpack.sass");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const baseProd = merge.smart(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
});

const umd = {
  output: {
    filename: "[name].umd.js",
    libraryExport: "default",
    libraryTarget: "umd"
  }
};

module.exports = [
  merge.smart(baseProd, sass),
  merge.smart(baseProd, umd, sass)
];
