const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CopyPlugin = require('copy-webpack-plugin');

const { NODE_ENV } = process.env;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified');
}
if (!['development', 'production'].includes(NODE_ENV)) {
  throw new Error('The NODE_ENV environment variable has to be "development" or "production"');
}

const isEnvDevelopment = NODE_ENV === 'development';
const isEnvProduction = NODE_ENV === 'production';

module.exports = {
  entry: {
    index: './server/index.js',
  },
  mode: NODE_ENV,
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../', isEnvProduction ? 'build' : 'build-dev'),
    publicPath: `./${isEnvProduction ? 'build' : 'build-dev'}/`,
    filename: '[name].js',
  },
  target: 'node',
  stats: 'errors-only',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.mmdb$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(isEnvDevelopment),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      logLevel: 'silent',
    }),
    // new CopyPlugin([{ from: './src/config/database.js', to: 'config/database.js' }]),
  ],
};
