'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
<<<<<<< HEAD
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
=======
  entry: [  
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',  // entry_webpack.config.js p21行
    // 跟热更新相关的 .js 文件
    // 当前文件等同于早期版本的 webpack-dev-server.js 
    './src/index'
  ],
  cache: true,  // 开启增量编译
>>>>>>> origin/master
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
<<<<<<< HEAD
  loader: 'react-hot!babel-loader',  // 从右往左以此执行，管道 － 链式执行_20160511
=======
  loader: 'react-hot!babel-loader',
>>>>>>> origin/master
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
