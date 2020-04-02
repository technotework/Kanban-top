const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
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
        test: /\.json$/,
        include: path.resolve(__dirname, 'src/js'),
        use: ['json-loader'],
        type: "javascript/auto"
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/sass'),
        use: ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader']
      }
    ]
  }
};