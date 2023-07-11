import Fashion_Carousel1 from "../../../../Assets/cloth_caresoul1.jpg"
import Fashion_Carousel2 from "../../../../Assets/cloth_caresoul2.jpg"
import Fashion_Carousel3 from "../../../../Assets/cloth_caresoul3.jpg"
import Fashion_Carousel4 from "../../../../Assets/cloth_caresoul4.jpg"
import "./Carousel.css"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel= () => {    
      const settings = {
        infinite: true, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
      };
  return (
    <Slider {...settings}>
      <div className="Caresoul_img">
      <img src={Fashion_Carousel1} alt="Fashion_Carousel1" />
</div>
<div className="Caresoul_img">
  <img src={Fashion_Carousel2} alt="Fashion_Carousel2" />
</div>
<div className="Caresoul_img">
  <img src={Fashion_Carousel3} alt="Fashion_Carousel3" />
</div>
<div className="Caresoul_img">
  <img src={Fashion_Carousel4} alt="Fashion_Carousel4" />
</div>
      </Slider>
  );
};

export default Carousel
