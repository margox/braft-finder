var webpack = require('webpack')
  , merge = require('webpack-merge')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , path = require('path')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'production',
  context: path.join(__dirname, '../src'),
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
    'draft-convert': 'draft-convert',
    'draftjs-utils': 'draftjs-utils'
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new ExtractTextPlugin("index.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        zindex: false,
        safe: true
      }
    }),
  ]
})
