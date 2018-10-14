const path = require("path");
const pkg = require("./package.json");

const libName = pkg.name.replace(/[^a-z][a-z0-9]{1}/gi, (n, i, s) =>
  s[i + 1].toUpperCase()
);

const plugins = [];

if (pkg.devDependencies["css-loader"]) {
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  plugins.push(
    new HtmlWebpackPlugin({
      title: "Development Workspace",
      template: "./dev/index.html",
      inject: "head"
    })
  );
}

module.exports = {
  entry: {
    [libName]: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: libName,
    libraryTarget: "umd",
    libraryExport: "default"
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".sass", ".scss"]
  },
  externals: [
    // Everything that starts with "lodash/"
    // /^lodash\/.+$/
  ]
};
