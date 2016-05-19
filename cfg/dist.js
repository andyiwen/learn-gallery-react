'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  // __dirname 指的是当前执行脚本所在的目录
  cache: false,  // true 的时候，webpack 会缓存生成的代码块（模块），以便实现多次增量编译提升性能
  // 最终生成，只需要一次，不需要cache，所以为false_20160518
  devtool: 'sourcemap',  // 生成 sourcemap   output 
  plugins: [
    new webpack.optimize.DedupePlugin(),  
    // 用来检测相似的文件，或者文件中重复的内容，然后将这些冗余在optput中消除掉
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // uglifyjs 用来压缩输出js
    new webpack.optimize.OccurenceOrderPlugin(),
    // 按照引用频度来排序各个模块，引用的越频繁其id值长度就越短，达到减少文件大小的效果
    new webpack.optimize.AggressiveMergingPlugin(),
    // 用来生产代码的 task，合并相似的 task，提取公共部分
    new webpack.NoErrorsPlugin()
    // 用来保证编译过程不出错
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
