import Carousel_image1 from "../../../../Assets/Home_Carousel1.jpg"
import Carousel_image2 from "../../../../Assets/Home_Carousel2.png"
import Carousel_image3 from "../../../../Assets/Home_Carousel3.png"
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
      <img src={Carousel_image1} alt="Carousel_image1" />
</div>
<div className="Caresoul_img">
  <img src={Carousel_image2} alt="Carousel_image2" />
</div>
<div className="Caresoul_img">
  <img src={Carousel_image3 } alt="Carousel_image3 " />
</div>
      </Slider>
  );
};

export default Carousel
