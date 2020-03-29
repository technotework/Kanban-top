const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    port: 9000,
    contentBase: 'public',
    publicPath: '/js/',
    hot: true,
    watchContentBase: true,
    host: '0.0.0.0'
  }
});