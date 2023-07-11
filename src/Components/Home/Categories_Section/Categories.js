import "./Categories.css"
import product1 from "../../../Assets/cooling.jpg"
import product2 from "../../../Assets/laptopStand.jpg"
import product3 from "../../../Assets/Jackets.jpg"
import product4 from "../../../Assets/T-Shirt.jpg"
import product5 from "../../../Assets/Pack_Of_Shirts.jpg"
import product6 from "../../../Assets/Pendant.jpg"
import product7 from "../../../Assets/Necklace.jpg"
import product8 from "../../../Assets/rings.jpg"
import product9 from "../../../Assets/hand.jpg"
import product10 from "../../../Assets/doorStop.jpg"
import product11 from "../../../Assets/headphones.jpg"
import product12 from "../../../Assets/wallStickers.jpg"
import product13 from "../../../Assets/Backpacks.jpg"
import product14 from "../../../Assets/Docks.jpg"
import product15 from "../../../Assets/Mattress.jpg"
import product16 from "../../../Assets/smartWatch.jpg"
import { Link } from "react-router-dom"

let Categories = () =>{
    return(
        <>
         <h2 className="Section-title">Categories</h2>
         <div className="Category">

    <div class="product-card">
      <Link to="Electronics">
    <img src={product1} alt="Cooling Pads"/>
    <p class="product-description">Cooling Pads/Cooling Stands</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Electronics">
    <img src={product2} alt="Laptop Stand"/>
    <p class="product-description">Laptop Stand</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="FClothing">
    <img src={product3}  alt="Jackets"/>
    <p class="product-description">Jackets & Coats</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="MClothing">
    <img src={product4}  alt="T-Shirts"/>
    <p class="product-description">Polo T-Shirts</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="MClothing">
    <img src={product5}  alt="T-Shits Pack"/>
    <p class="product-description">Pack of 5 plain half sleeves T shirts for men</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Jewelery">
    <img src={product6}  alt="Pendant"/>
    <p class="product-description">Pendant Necklace</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Jewelery">
    <img src={product7}  alt="Necklace"/>
    <p class="product-description">Necklace</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Jewelery">
    <img src={product8}  alt="Rings"/>
    <p class="product-description">Rings</p>
    </Link>
    </div>

     <div class="product-card">
     <Link to="Electronics">
     <img src={product9}  alt="Hand Strengthers"/>
     <p class="product-description">Hand Strengthers</p>
     </Link>
     </div>

    <div class="product-card">
    <Link to="Electronics">
    <img src={product10}  alt="Door Stops"/>
    <p class="product-description">Door Stops</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Electronics">
    <img className = "image" src={product11}  alt="Headphones"/>
    <p class="product-description">In-Ear Headphones</p>
    </Link>
    </div>

    <div class="product-card">
    <Link to="Electronics">
    <img src={product12}  alt="Wall Stickers"/> 
    <p class="product-description">Wall Stickers & Decals</p>
    </Link>
    </div>

     <div class="product-card">
     <Link to="MClothing">
    <img src={product13}  alt="Backpacks"/>
    <p class="product-description">Fashion Backpacks</p>
     </Link>
     </div>

   <div class="product-card">
   <Link to="Electronics">
    <img src={product14}  alt="Cocks"/>
    <p class="product-description">Docks & Stands</p>
    </Link>
   </div>

   <div class="product-card">
   <Link to="Electronics">
    <img src={product15}  alt="Mattress Protectors"/>
    <p class="product-description">Mattress Protectors</p>
    </Link>
  </div>

<div class="product-card">
<Link to="Electronics">
    <img src={product16}  alt="Smart Watches"/>
    <p class="product-description">Smart Watches</p>
    </Link>
  </div>
         </div>
        </>
    )
}

export default Categories