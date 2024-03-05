const path = require('path')
module.exports = {
  mode:'production',
  devtool:false,
  entry:path.resolve(__dirname,'index.js'),
  output: {
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  optimization: {
    minimize: false,
},
}

