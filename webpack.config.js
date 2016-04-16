var webpack = require('webpack');
var path = require('path');

const merge = require('webpack-merge');



// Detect how npm is run and branch based on that
const TARGET = process.env.npm_lifecycle_event;

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
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
               'url?limit=8192',
               'img'
            ]
         },
      ]
   }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(config, {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default localhost
      host: process.env.HOST,
      port: process.env.PORT

      // If you want defaults, you can use a little trick like this
      // port: process.env.PORT || 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {});
}
