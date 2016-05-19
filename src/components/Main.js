require('normalize.css/normalize.css');
// require('styles/App.css');
require('styles/App.css');

import React from 'react';

// 获取突破相关的数据
let imageDatas = require('../data/imageDatas.json');

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURI(imageDatasArr){
    for(let i = 0, j = imageDatasArr.length; i < j; i++){
    	let singleImageData = imageDatasArr[i];

    	singleImageData.imageURI = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>

      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <span>hello 热更新 啦啦啦</span>
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
