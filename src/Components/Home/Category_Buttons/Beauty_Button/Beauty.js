import Beautybrands from "../../../../Assets/Beauty_brands.png"
import Brands from "../../../../Assets/Brands_category.png"
import Image1 from "../../../../Assets/Beauty_image1.png"
import Image2 from "../../../../Assets/Beauty_image2.png"
import SkinCare from "../../../../Assets/SkinCare.png"
import Hair from "../../../../Assets/hairCare.png"
import Makeup from "../../../../Assets/makeup.png"
import Fragrance from "../../../../Assets/Fragrances.png"
import Bath from "../../../../Assets/Bath.png"
import BeautyTools from "../../../../Assets/Beauty_Tools.png"
import Carousel from "./Carousel"
import ProductCard from "../../../Products/ProductCard"

let Beauty = () =>{
    return(
        < div className = "Section_container">
        <img className="Category_img"src ={Beautybrands} alt="Browse by category"/>
        <img className="Category_img"src ={Brands} alt="Brands"/>
        <Carousel/>
        <img className="Category_img"src ={Image1} alt="Image1"/>
        <img className="Category_img"src ={Image2} alt="Image2"/>
        <div className="Brands">
            <div> <img src={Makeup} alt ="Makeup"/></div>
            <div> <img src={Hair} alt ="Hair care"/></div>
            <div> <img src={SkinCare} alt ="SkinCare"/></div>
            <div> <img src={BeautyTools} alt ="BeautyTools"/></div>
            <div> <img src={Bath} alt ="Bath & Beauty"/></div>
            <div> <img src={Fragrance} alt ="Fragrances"/></div>
         </div>
         <ProductCard/>
        </div>
    )
}

export default Beauty