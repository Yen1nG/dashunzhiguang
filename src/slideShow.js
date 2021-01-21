import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import cover from './images/top.png';
import ssimg1 from './images/ssimg1.jpg';
import ssimg2 from './images/ssimg2.jpg';
import ssimg3 from './images/ssimg3.jpg';

const slideImages = [
    cover,
    ssimg1,
    ssimg2, 
    ssimg3
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;