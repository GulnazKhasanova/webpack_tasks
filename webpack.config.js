const path = require('path');

//'./index.js'
module.exports = {
    mode: 'development',
  entry: path.resolve(_dirname,'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
};