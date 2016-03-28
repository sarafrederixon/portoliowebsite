var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
   entry: {
      javascript: APP_DIR + '/index.jsx',
      html: "./src/index.html",
   },
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
   },
   module : {
      loaders : [
         {
            test : /\.jsx?/,
            include : APP_DIR,
            loaders: ["react-hot", "babel"],
         },
         {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
         },
         {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
         }
      ]
   }
};

module.exports = config;
