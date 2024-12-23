import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/slider/banner.png';
import img2 from '../../assets/slider/banner2.png';
import img3 from '../../assets/slider/banner3.png';
import ReactDOM from "react-dom";
import React from 'react';

const SimpleCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={img1} alt='slide-1' />
        </div>
        <div>
          <img src={img2} alt='slide-2' />
        </div>
        <div>
          <img src={img3} alt='slide-3' />
        </div>
      </Slider>
    );
  };

  export default SimpleCarousel
