import step1 from "../../../Assets/step1.jpg"
import step2 from "../../../Assets/step2.jpg"
import step3 from "../../../Assets/step3.jpg"
import step4 from "../../../Assets/step4.jpg"
import step5 from "../../../Assets/step5.jpg"
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
      <div className="Caresoul">
      <img src={step1} alt="Step 1" />
</div>
<div className="Caresoul">
  <img src={step2} alt="Step 2" />
</div>
<div className="Caresoul">
  <img src={step3} alt="Step 3" />
</div>
<div className="Caresoul">
  <img src={step4} alt="Step 4" />
</div>
<div className="Caresoul">
  <img src={step5} alt="Step 5" />
</div>
      </Slider>
  );
};

export default Carousel
