'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

<<<<<<< HEAD
module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
=======
module.exports = {   // webpack.config.js 
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,   // 开启loaders 的debug模式
  devtool: 'eval',  // 生成 eval   output 
  output: {   // 输出 app.js  - dist 输出
>>>>>>> origin/master
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: `.${defaultSettings.publicPath}`
  },
<<<<<<< HEAD
  devServer: {
=======
  devServer: {   // 开发服务器
>>>>>>> origin/master
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
<<<<<<< HEAD
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
=======
  resolve: {   // 模块解析配置项
    // only-dev-server  only-dev-server.js  only-dev-server.jsx
    extensions: ['', '.js', '.jsx'], 
    alias: {   // 为module解析路径，指定一个更加简短的别名
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,  // 来源
      stores: `${defaultSettings.srcPath}/stores/`,    // 商店
      styles: `${defaultSettings.srcPath}/styles/`,    // 样式
>>>>>>> origin/master
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
