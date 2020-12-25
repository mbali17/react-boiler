// Requires
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
  const procesEnv = env.NODE_ENV || 'dev';
  return {
    mode: procesEnv,
    entry: ['@babel/polyfill', './src/index.js'],
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: 'file-loader?name=[name]-[hash:base64:7].[ext]',
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'styled-components': path.resolve(__dirname, './', 'node_modules', 'styled-components'),
      },
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'avaform-react.js',
    },
    devServer: {
      contentBase: './dist',
      port: 8080,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(procesEnv),
      }),
      new HtmlWebpackPlugin({
        template: './dist/index.html',
      }),
    ],
  };
};
