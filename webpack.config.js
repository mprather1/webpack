var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body'
});

var path = {
  ENTRY: "./app/index.jsx",
  FILENAME: "index_bundle.js",
  PATHNAME: __dirname + "/dist"
};

module.exports = {
  entry: [
    path.ENTRY
    ],
  module: {
    loaders: [
      {test: /\.jsx/, include: __dirname + '/app', loader: "babel-loader"}
    ]
  },
  output: {
    filename: path.FILENAME,
    path: path.PATHNAME
  },
  plugins: [HtmlWebpackPluginConfig]
};