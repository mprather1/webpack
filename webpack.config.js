var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: 'index.html',
  inject: 'body'
});

var path = {
  ENTRY: "./app/index.jsx",
  OUTPUT_FILENAME: "index_bundle.js",
  OUTPUT_PATH: __dirname + "/dist"
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
    filename: path.OUTPUT_FILENAME,
    path: path.OUTPUT_PATH
  },
  plugins: [HtmlWebpackPluginConfig]
};