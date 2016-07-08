// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./src/data');

module.exports = {
   entry: './src/entry.js',

   output: {
      filename: 'bundle.js',
      path: './build',
      libraryTarget: 'umd'
   },

   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
         },
         {
            test: /\.jsx$/,
            loaders: ['babel-loader']
         }
      ]
   },

   plugins: [
      new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
   ]
}