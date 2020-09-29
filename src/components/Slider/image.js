import React from 'react';

const ImgComp = ({src}) =>{
    let imgStyles ={
        width: 100 + "%",
        height: 800
    }
    return <img src={src} style={imgStyles}alt="slide-img"/>
}

export default ImgComp;
