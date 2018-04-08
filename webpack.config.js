const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    './1.js'
  ],
  output: {
  path: path.resolve(__dirname, 'build'),
    filename: 'bundle2.js'
},
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};