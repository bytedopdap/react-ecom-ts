import React, { useState } from 'react';
import ImgComp from './image';
import './slider.scss';

const Slider = () => {

  let sliderArr = [
    <ImgComp src={'https://ucarecdn.com/2e5462d7-e919-44e1-b02b-e328cab6a863/1598250920D9Kef.jpg'}/>,
    <ImgComp src={'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'}/>
  ];
  const [x,setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length -1 )) : setX(x + 100);

  };
  const goRight = () => {
    x === -100 * (sliderArr.length -1 ) ? setX(0) : setX(x - 100);
  };


  return (
    <div className="slider">
      {sliderArr.map((item,index) => {
          return (
            <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
              {item}
            </div>
          )
      })}
      <button id="goLeft" onClick={goLeft}>Left</button>
      <button id="goRight"onClick={goRight}>Right</button>

    </div>
  );
}

export default Slider;