const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'MyBookingsRater.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { 
            loader: "style-loader"
          },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },  
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: [':data-src']
      //     }
      //   }
      // },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
}