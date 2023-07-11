import Browse from "../../../../Assets/Browse.jpg"
import Pret from "../../../../Assets/Pret.jpg"
import Unstich from "../../../../Assets/unstich.jpg"
import Westren from "../../../../Assets/westernwear.jpg"
import Footwear from "../../../../Assets/footwear.jpg"
import Bottoms from "../../../../Assets/bottoms.jpg"
import Bags from "../../../../Assets/bags.jpg"
import Watch from "../../../../Assets/Sop_watches.jpg"
import jewellery from "../../../../Assets/Jewellery.jpg"
import Acessories from "../../../../Assets/Accessories.jpg"
import hats from "../../../../Assets/Hats.jpg"
import Brands from "../../../../Assets/brands.jpg"
import Generation from "../../../../Assets/generation.jpg"
import Salitex from "../../../../Assets/salitex.jpg"
import Saya from "../../../../Assets/Saya.jpg"
import Safwa from "../../../../Assets/safwa.jpg"
import Sapphire from "../../../../Assets/sapphire.jpg"
import edenrobe from "../../../../Assets/edenrobe.jpg"
import Bonanza from "../../../../Assets/bonanza.jpg"
import Orient from "../../../../Assets/orient.jpg"
import Morbagh from "../../../../Assets/morbagh.jpg"
import Wear from "../../../../Assets/wear.jpg"
import Carousel from "./Carousel"
import ProductCard from "../../../Products/ProductCard"
import "./Fashion.css"
let Fashion = () =>{
    return(
        < div className = "Section_container">
        <img className="Category_img"src ={Browse} alt="Browse by category"/>
         <div className="Fashion_Categories">
            <div> <img src={Pret} alt ="Pret Wear"/></div>
            <div> <img src={Unstich} alt ="Unstiched cloths category"/></div>
            <div> <img src={Westren} alt ="Westren Wear"/></div>
            <div> <img src={Footwear} alt ="Footwear"/></div>
            <div> <img src={Bottoms} alt ="Bottoms"/></div>
            <div> <img src={Bags} alt ="Bags"/></div>
            <div> <img src={Watch} alt ="Watches"/></div>
            <div> <img src={jewellery} alt ="Jewellery"/></div>
            <div> <img src={Acessories} alt="Pret Wear"/></div>
            <div> <img src={hats} alt ="Hats"/></div> 
         </div>
         <Carousel/>
         <img className="Category_img2" src={Brands} alt ="Brands"/>
         <div className="Brands">
            <div> <img src={Generation} alt ="Generations"/></div>
            <div> <img src={Sapphire} alt ="Sapphire"/></div>
            <div> <img src={Saya} alt ="Saya"/></div>
            <div> <img src={Safwa} alt ="Safwa"/></div>
            <div> <img src={Morbagh} alt ="Morbagh"/></div>
            <div> <img src={edenrobe} alt ="Edenrobe"/></div>
            <div> <img src={Salitex} alt ="Salitex"/></div>
            <div> <img src={Orient} alt ="Orient"/></div>
            <div> <img src={Bonanza} alt="Bonanza"/></div>
         </div>
         <div> <img className="Category_img3" src={Wear} alt="Wear"/></div>
         <ProductCard/>
        </div>
        
    )
}

export default Fashion