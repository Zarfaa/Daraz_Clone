import Beauty_Carousel1 from "../../../../Assets/Beauty_Carousel1.jpg"
import Beauty_Carousel2 from "../../../../Assets/Beauty_Carousel2.jpg"
import Beauty_Carousel3 from "../../../../Assets/Beauty_Carousel3.jpg"
import Beauty_Carousel4 from "../../../../Assets/Beauty_Carousel4.png"
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
      <div className="Caresoul_img1">
      <img src={Beauty_Carousel1} alt="Beauty_Carousel1" />
</div>
<div className="Caresoul_img1">
  <img src={Beauty_Carousel2} alt="Beauty_Carousel2" />
</div>
<div className="Caresoul_img1">
  <img src={Beauty_Carousel3} alt="Beauty_Carousel3" />
</div>
<div className="Caresoul_img1">
  <img src={Beauty_Carousel4} alt="Beauty_Carousel4" />
</div>
      </Slider>
  );
};

export default Carousel
