var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.jsx'
    ],
  module: {
    loaders: [
      {test: /\.jsx/, include: __dirname + '/app', loader: "babel-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [HtmlWebpackPluginConfig]
};