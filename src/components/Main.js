require('normalize.css/normalize.css');
// require('styles/App.css');
require('styles/App.scss');

import React from 'react';

// 获取突破相关的数据_201060519
let imageDatas = require('../data/imageDatas.json');

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURI(imageDatasArr){
    for(let i = 0, j = imageDatasArr.length; i < j; i++){
    	let singleImageData = imageDatasArr[i];

    	singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

// let yeomanImage = require('../images/yeoman.png');

var ImgFigure = React.createClass({
// class ImgFigure extends React.Component {
	render: function(){
		return (
			<figure className="img-figure">
			    <img src={this.props.data.imageURL}
			         alt={this.props.data.title}
			    />
			    <figcaption>
			        <h2 className="img-title">{this.props.data.title}</h2>
			    </figcaption>
			</figure>

		);
	}
//}
});


class AppComponent extends React.Component {
  render() {
    let controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function (value){
    	imgFigures.push(<ImgFigure data={value}/>);
    });


    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
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
