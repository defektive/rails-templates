
module.exports = {
  entry: [
    "bootstrap-webpack!./src/bootstrap/bootstrap.config.jsconfig",
    "./src/css/app.less",
    "./src/App"
  ],

  output: {
      path: __dirname +"/public",
      filename: "app.js"
  },

  module: {
    loaders: [

      // { test: /\.jx$/, loader: 'jsx-loader?harmony'},
      // { test: /\.js$/, loader: '6to5-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},

      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },

  externals: { jquery: "jQuery" }
}
