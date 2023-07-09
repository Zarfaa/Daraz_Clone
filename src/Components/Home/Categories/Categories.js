import "./Categories.css"
import product1 from "../../../Assets/cooling.jpg"
import product2 from "../../../Assets/laptopStand.jpg"
import product3 from "../../../Assets/milk.jpg"
import product4 from "../../../Assets/noodles.jpg"
import product5 from "../../../Assets/infant.jpg"
import product6 from "../../../Assets/bodySoap.jpg"
import product7 from "../../../Assets/oil.jpg"
import product8 from "../../../Assets/hair treatments.jpg"
import product9 from "../../../Assets/hand.jpg"
import product10 from "../../../Assets/doorStop.jpg"
import product11 from "../../../Assets/headphones.jpg"
import product12 from "../../../Assets/wallStickers.jpg"
import product13 from "../../../Assets/Backpacks.jpg"
import product14 from "../../../Assets/Docks.jpg"
import product15 from "../../../Assets/Mattress.jpg"
import product16 from "../../../Assets/smartWatch.jpg"

let Categories = () =>{
    return(
        <>
         <h2 className="Section-title">Categories</h2>
         <div className="Category">

    <div class="product-card">
    <img src={product1} alt="Cooling Pads"/>
    <p class="product-description">Cooling Pads/Cooling Stands</p>
    </div>

    <div class="product-card">
    <img src={product2} alt="Laptop Stand"/>
    <p class="product-description">Laptop Stand</p>
    </div>

    <div class="product-card">
    <img src={product3}  alt="Growing-up Milk (3yrs +)"/>
    <p class="product-description">Growing-up Milk (3yrs +)</p>
    </div>

    <div class="product-card">
    <img src={product4}  alt="Noodles"/>
    <p class="product-description">Noodles</p>
    </div>

    <div class="product-card">
    <img src={product5}  alt="Infant (0-6 mnths)"/>
    <p class="product-description">Infant (0-6 mnths)</p>
    </div>

    <div class="product-card">
    <img src={product6}  alt="Body Soaps"/>
    <p class="product-description">Body Soaps & Shower Gels</p>
    </div>

    <div class="product-card">
    <img src={product7}  alt="Oil"/>
    <p class="product-description">Oil</p>
    </div>

    <div class="product-card">
    <img src={product8}  alt="Hair Treatments"/>
    <p class="product-description">Hair Treatments</p>
    </div>

     <div class="product-card">
     <img src={product9}  alt="Hand Strengthers"/>
     <p class="product-description">Hand Strengthers</p>
     </div>

    <div class="product-card">
    <img src={product10}  alt="Door Stops"/>
    <p class="product-description">Door Stops</p>
    </div>

    <div class="product-card">
    <img className = "image" src={product11}  alt="Headphones"/>
    <p class="product-description">In-Ear Headphones</p>
    </div>

    <div class="product-card">
    <img src={product12}  alt="Wall Stickers"/> 
    <p class="product-description">Wall Stickers & Decals</p>
    </div>

     <div class="product-card">
    <img src={product13}  alt="Backpacks"/>
    <p class="product-description">Fashion Backpacks</p>
     </div>

   <div class="product-card">
    <img src={product14}  alt="Cocks"/>
    <p class="product-description">Docks & Stands</p>
   </div>

   <div class="product-card">
    <img src={product15}  alt="Mattress Protectors"/>
    <p class="product-description">Mattress Protectors</p>
  </div>

<div class="product-card">
    <img src={product16}  alt="Smart Watches"/>
    <p class="product-description">Smart Watches</p>
  </div>
         </div>
        </>
    )
}

export default Categories