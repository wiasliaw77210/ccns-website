// webpack.base.js
"use strict";
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: path.join(__dirname, "../", "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  node: {
    setImmediate: false,
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
