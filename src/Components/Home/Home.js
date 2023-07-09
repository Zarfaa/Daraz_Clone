import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css"
import Display from "../../Assets/Display_Img.png"
import CategoryButtons from './Buttons';
import Footer from './Footer/Footer';
import FlashSale from './Flash Sale/FlashSale';
import DarazMall from './DarazMall/DarazMall';
import Categories from './Categories/Categories';
import Carousel from "./Home_Carousel"
import Product from '../Products/ProductCard'
const Home = () => {
  return (
        <div className='Home_container'>
          <Carousel/>
         <section ><img className='display_image' src={Display} alt="Homepage_display" /></section>
         <CategoryButtons/>
         <FlashSale/>
         <DarazMall/>
         <Categories/>
         <h1 className="Heading">Just For You</h1>
        <Product/>
         <Footer/>
       
    </div>
  );
};

export default Home;
