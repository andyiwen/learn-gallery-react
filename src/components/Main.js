require('normalize.css/normalize.css');
<<<<<<< HEAD
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <span>hello</span>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
=======
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

/*
 * 获取区间内的一个随机值
 */
// 3-4
function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}

/*
 * 获取 0~30° 之间的一个任意正负值
 */
function get30DegRandom() {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
}

// let yeomanImage = require('../images/yeoman.png');

var ImgFigure = React.createClass({
// class ImgFigure extends React.Component {

  /*
   * imgFigure 的点击处理函数
   */
  handleClick: function (e) {

    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }

    e.stopPropagation();
    e.preventDefault();
  },


	render: function(){
    // // 3-4
    // var styleObj = {};

    // // 如果props属性中指定了这张图片的位置，则使用
    // if (this.props.arrange.pos) {
    //   styleObj = this.props.arrange.pos;
    // }

    // 3-2
		return (
      // <figure className="img-figure" style={styleObj}>
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

// var GalleryByReactApp = React.createClass({
//   render: function
// });


class AppComponent extends React.Component {
  // constructor(){
  //   this.Constant = {
  //     centerPos: {
  //       left: 0,
  //       right: 0
  //     }
  //   }
  // }
  static Constant: {  
    centerPos: {
        left: 0,
        right: 0
    },
    hPosRange: {   // 水平方向的取值范围
        leftSecX: [0, 0],
        rightSecX: [0, 0],
        y: [0, 0]
    },
    vPosRange: {    // 垂直方向的取值范围
        x: [0, 0],
        topY: [0, 0]
    }
  };

  // 3-3 
  // Constant: {  // 3-3 04:38
  //   centerPos: {
  //       left: 0,
  //       right: 0
  //   },
  //   hPosRange: {   // 水平方向的取值范围
  //       leftSecX: [0, 0],
  //       rightSecX: [0, 0],
  //       y: [0, 0]
  //   },
  //   vPosRange: {    // 垂直方向的取值范围
  //       x: [0, 0],
  //       topY: [0, 0]
  //   }
  // },
  
  // Constant(){

  // },



  /*
   * 重新布局所有图片
   * @param centerIndex 指定居中排布哪个图片
   */
  // 3-4 
  // rearrange: function (centerIndex) {
  //   var imgsArrangeArr = this.state.imgsArrangeArr,
  //       Constant = this.Constant,
  //       centerPos = Constant.centerPos,
  //       hPosRange = Constant.hPosRange,
  //       vPosRange = Constant.vPosRange,
  //       hPosRangeLeftSecX = hPosRange.leftSecX,
  //       hPosRangeRightSecX = hPosRange.rightSecX,
  //       hPosRangeY = hPosRange.y,
  //       vPosRangeTopY = vPosRange.topY,
  //       vPosRangeX = vPosRange.x,

  //       imgsArrangeTopArr = [],
  //       topImgNum = Math.floor(Math.random() * 2),    // 取一个或者不取
  //       // 变量初始化  放在上边的图片下标
  //       topImgSpliceIndex = 0,

  //       imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

  //       // 首先居中 centerIndex 的图片, 居中的 centerIndex 的图片不需要旋转
  //       imgsArrangeCenterArr[0] = {
  //         pos: centerPos,
  //         rotate: 0,
  //         isCenter: true
  //       };

  //       // 取出要布局上侧的图片的状态信息
  //       topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
  //       imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

  //       // 布局位于上侧的图片
  //       imgsArrangeTopArr.forEach(function (value, index) {
  //           imgsArrangeTopArr[index] = {
  //             pos: {
  //                 top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
  //                 left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
  //             },
  //             rotate: get30DegRandom(),
  //             isCenter: false
  //           };
  //       });

  //       // 布局左右两侧的图片
  //       for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
  //           var hPosRangeLORX = null;

  //           // 前半部分布局左边， 右半部分布局右边
  //           if (i < k) {
  //               hPosRangeLORX = hPosRangeLeftSecX;
  //           } else {
  //               hPosRangeLORX = hPosRangeRightSecX;
  //           }

  //           imgsArrangeArr[i] = {
  //             pos: {
  //                 top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
  //                 left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
  //             },
  //             rotate: get30DegRandom(),
  //             isCenter: false
  //           };

  //       }

  //       if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
  //           imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
  //       }

  //       imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

  //       this.setState({
  //           imgsArrangeArr: imgsArrangeArr
  //       });
  // },

  // /*
  //  * 利用arrange函数， 居中对应index的图片
  //  * @param index, 需要被居中的图片对应的图片信息数组的index值
  //  * @returns {Function}
  //  */
  // center: function (index) {
  //   return function () {
  //     this.rearrange(index);
  //   }.bind(this);
  // },
/*
  getInitialState: function () {
    return {
        imgsArrangeArr: [ // 初始化每一个图片信息
            // 初始化放在了 render 函数中
            /*{  
                pos: {
                    left: '0',
                    top: '0'
                },
                rotate: 0,    // 旋转角度
                isInverse: false,    // 图片正反面
                isCenter: false,    // 图片是否居中
            }*/
/*        ]
    };
  },*/

  // 组件加载以后， 为每张图片计算其位置的范围
  // componentDidMount: function () {

  //   // 首先拿到舞台的大小
  //   var stageDOM = React.findDOMNode(this.refs.stage),
  //       stageW = stageDOM.scrollWidth,  // 三者区别 
  //       stageH = stageDOM.scrollHeight, // 可视区
  //       halfStageW = Math.ceil(stageW / 2),
  //       halfStageH = Math.ceil(stageH / 2);

  //   // 拿到一个imageFigure的大小
  //   var imgFigureDOM = React.findDOMNode(this.refs.imgFigure0),
  //       imgW = imgFigureDOM.scrollWidth,
  //       imgH = imgFigureDOM.scrollHeight,
  //       halfImgW = Math.ceil(imgW / 2),
  //       halfImgH = Math.ceil(imgH / 2);

  //   // 计算中心图片的位置点
  //   this.Constant.centerPos = {
  //       left: halfStageW - halfImgW,
  //       top: halfStageH - halfImgH
  //   };

  //   // 计算左侧，右侧区域图片排布位置的取值范围
  //   this.Constant.hPosRange.leftSecX[0] = -halfImgW;
  //   this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
  //   this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
  //   this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
  //   this.Constant.hPosRange.y[0] = -halfImgH;
  //   this.Constant.hPosRange.y[1] = stageH - halfImgH;

  //   // 计算上侧区域图片排布位置的取值范围
  //   this.Constant.vPosRange.topY[0] = -halfImgH;
  //   this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
  //   this.Constant.vPosRange.x[0] = halfStageW - imgW;
  //   this.Constant.vPosRange.x[1] = halfStageW;

  //   // this.rearrange(0);

  // },

  // render: function() {
  render() {
    let controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function (value){
    	imgFigures.push(<ImgFigure data={value}/>);
    });

    // imageDatas.forEach(function (value, index) {

    //     if (!this.state.imgsArrangeArr[index]) {
    //         this.state.imgsArrangeArr[index] = {
    //             pos: {
    //                 left: 0,
    //                 top: 0
    //             },
    //             rotate: 0,
    //             isInverse: false,
    //             isCenter: false
    //         };
    //     }

    //     imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure' + index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>);

    //     controllerUnits.push(<ControllerUnit key={index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)}/>);
    // }.bind(this));


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
>>>>>>> origin/master
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
