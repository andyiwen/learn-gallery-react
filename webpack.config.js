'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test'];   
// 读书笔记_20160518
// 1.此处为 配置文件，cfg/ 文件夹下的.js文件
// 2.dev、src、serve 本地开发时的任务 - src项目的根目录
// dist 编译后任务，test 测试任务

// 3.页面热加载_20160518
// src/components/Main.js

// 4.热加载工作原理：
// iframe
// 注册了一个全局变量（全局对象）：__REACT_DEVTOOLS_GLOBAL_HOOK__
// <script>
// __REACT_DEVTOOLS_GLOBAL_HOOK__ ＝ parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
// </script>
//
// 

// Set the correct environment
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test'; 
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'dev';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  return config;
}

module.exports = buildConfig(env);
