const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: "./src/js/app.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/sass'),
        use: ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader']
      }
    ]
  },
  devServer: {
    open: true,
    port: 9000,
    contentBase: './public'
  }
};