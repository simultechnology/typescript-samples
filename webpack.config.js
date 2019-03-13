const path = require('path');

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  //mode: "production",

  entry: './ts/index.ts',

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/js/",
    filename: "index.js"
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
// importで.tsファイルを解決
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  },
  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    port: 3003,
  }

};