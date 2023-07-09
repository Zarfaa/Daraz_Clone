import React from 'react';
import Home_top1 from '../../Assets/carousel_image1.jpg';
import Home_top2 from '../../Assets/carousel_image2.jpg';
import Home_top3 from '../../Assets/carousel_image3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Home_Carousel.css"

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
      <div className="Home_Caresoul">
      <img src={Home_top1} alt="Step 1" />
</div>
<div className="Home_Caresoul">
  <img src={Home_top2} alt="Step 2" />
</div>
<div className="Home_Caresoul">
  <img src={Home_top3} alt="Step 3" />
</div>
      </Slider>
  );
};

export default Carousel
