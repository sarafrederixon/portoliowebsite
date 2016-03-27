var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context:  __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'//,
          // ExtractTextPlugin.extract("style", "css!sass")
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
        ]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
//TODO: package.json needs extract text plugin
