import path from 'path';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
      })
    ],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
