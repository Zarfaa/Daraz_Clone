import Food from "../../../../Assets/Food.png"
import Beauty from "../../../../Assets/Personal_Care.png"
import Beverages from "../../../../Assets/Beverages.png"
import Household from "../../../../Assets/Household.png"
import Fresh from "../../../../Assets/Fresh_Products.png"
import BabyCare from "../../../../Assets/Baby_Care.png"
import Snacks from "../../../../Assets/Snacks.png"
import Breakfast from "../../../../Assets/Breakfast.png"
import Pet from "../../../../Assets/Pet_Supplies.png"
import ProductCard from "../../../Products/ProductCard"
import "./Mart.css"

let Mart = () =>{
    return(
        <>
        <h1 className="Section_title">Shop Your Favourite Categories</h1>
        <div  className="Products_Container">
            <div>
                <img src={Food} alt="Food"/>
            </div>
            <div>
                <img src={Beauty} alt="Beautyproducts"/>
            </div>
            <div>
                <img src={Beverages} alt="Beverages"/>
            </div>
            <div>
                <img src={Household} alt="Househols"/>
            </div>
            <div>
                <img src={Fresh} alt="Fruits"/>
            </div>
            <div>
            <img src={BabyCare} alt="BabyCare"/>
            </div>
            <div>
            <img src={Snacks} alt="Snacks"/>
            </div>
            <div>
            <img src={Breakfast} alt="Breakfast"/>
            </div>
            <div>
            <img src={Pet} alt="Pet"/>
            </div>
        </div>
        <h1 className="Section_subtitle">All for you, just for you</h1>
        <ProductCard/>
        </>
    )
}

export default Mart