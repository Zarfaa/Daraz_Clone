import Category from "../../../../Assets/Shop_Furniture.jpg"
import Home from "../../../../Assets/TrendingHome.png"
import Trend from "../../../../Assets/Home_Trending.png"
import LivingRoom from "../../../../Assets/livingRoom.png"
import Gaming from "../../../../Assets/GamingRoom.png"
import Kitchen from "../../../../Assets/Kitchen.png"
import Office from "../../../../Assets/Office.png"
import MustHave from "../../../../Assets/MustHave.jpg"
import Carousel from "./Carousel"
import ProductCard from "../../../Products/ProductCard"
import "./Home_Decor.css"
let Home_Decor = () =>{
    return(
        < div className = "Section_container">

        <img className="Category_img"src ={Home} alt="Browse by category"/>
        <img className="Category_img"src ={Trend} alt="Browse by category"/>
        <Carousel/>
        <img className="Category_img"src ={Category} alt="Browse by category"/>
        <div className="Room_Cateogires">
         <div>
         <img className="Category_img"src ={LivingRoom} alt="LivingRoom"/>
         </div>

         <div>
         <img className="Category_img"src ={Gaming} alt="Gaming Room"/>
         </div>

         <div>
         <img className="Category_img"src ={Kitchen} alt="Kitchen"/>
         </div>
         
         <div>
         <img className="Category_img"src ={Office} alt="Office"/>
         </div>
        </div>

        <img className="Category_img"src ={MustHave} alt="Must_Haves"/>
        <ProductCard/>
        </div>
    )
}

export default Home_Decor