const path = require("path");

const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      { test: /\.css$/, use: "css-loader" },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 15000 } },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
