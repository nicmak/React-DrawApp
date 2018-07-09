const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const port = 8080

// Webpack configuartion goes here
// mode: tells WP that the following config will be for development or prod
// Development: optimzed for speed and developer ex.
// Produc Mode: gives you a set of defaults for deploying app

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'], // entry point of app
  output: {
    filename: 'bundle.[hash].js', //we provide a hash because helps with caching
    publicPath: '/'
  },
  devtool: 'inline-source-map', //makes source maps, helps with debugging
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: ['url-loader?limit=1']
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port
  }
}
