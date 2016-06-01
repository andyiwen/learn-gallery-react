/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
<<<<<<< HEAD
        loader: 'eslint-loader'  // transpiling compiling
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,      // url()
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'  // 类ruby的写法
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
=======
        loader: 'eslint-loader'  // eslint 进行校验  保证最先执行
      }
    ],
    loaders: [    // loaders
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
      },
      // {
      //   test: /\.sass/,
      //   loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'  
      //   // expanded 类ruby写法
      // },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
>>>>>>> origin/master
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
<<<<<<< HEAD
=======
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
>>>>>>> origin/master
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
<<<<<<< HEAD
        test: /\.(png|jpg|gif|woff|woff2)$/,  // 后缀为这些时，使用url-loader_20160511
        loader: 'url-loader?limit=8192'   // 图片小于 8mb 时，采用base64编码格式
=======
        test: /\.(png|jpg|gif|woff|woff2)$/,  // 后缀为这些时，使用 url_loader_20160322
        loader: 'url-loader?limit=8192'   // 图片小于 8mb 时，采用 base64编码格式
>>>>>>> origin/master
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
