// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/static/html/index.html"],
    watchFiles: ["./src/static/html/index2.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/html/index.html",
      filename: "index.html", 
    }),
    new HtmlWebpackPlugin({
      template: "./src/static/html/index2.html",
      filename: "index2.html", 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
