const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const libName = "myLib";

module.exports = {
  entry: {
    [libName]: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: libName,
    libraryExport: "default"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development Workspace",
      template: "./dev/index.html",
      inject: "head"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist|test)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: [
    // Everything that starts with "lodash/"
    /^lodash\/.+$/
  ]
};
