var webpack = require('webpack');
var path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');



// Detect how npm is run and branch based on that
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

var config = {
   entry: {
     app: path.join(PATHS.app, 'app.js'),
     home: path.join(PATHS.app, 'home.js'),
     photography: path.join(PATHS.app, 'photography.js')
   },
   output: {
     path: PATHS.build,
     filename: '[name].js'
   },
   module : {
      loaders : [
         {
            test : /\.jsx?/,
            include : PATHS.app,
            loaders: ["react-hot", "babel"],
         },
         {
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
               'url?limit=8192',
               'img'
            ]
         },
      ]
   },
  plugins: [
  new HtmlWebpackPlugin({
    title: 'Sara Frederixon',
    template: './src/my-index.ejs', // Load a custom template
    inject: 'body', // Inject all scripts into the body
    chunks: ['app']

  })
]
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
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(config, {
    module: {
      loaders: [
        {
          test: /\.scss$/i,
          loader: ExtractTextPlugin.extract(['css', 'sass'])
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name].css"),
      new CleanWebpackPlugin([PATHS.build]),

      // Setting DefinePlugin affects React library size!
      // DefinePlugin replaces content "as is" so we need some
      // extra quotes for the generated code to make sense
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'

        // You can set this to '"development"' or
        // JSON.stringify('development') for your
        // development target to force NODE_ENV to development mode
        // no matter what
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
