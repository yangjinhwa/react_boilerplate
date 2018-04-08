const path = require('path');

module.exports = {
  entry: './1.js',
  output: {
  path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
}
};