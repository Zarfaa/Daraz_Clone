import "./Shop.css"
import product1 from "../../../Assets/ADM.jpg"
import product2 from "../../../Assets/coolingPad.jpg"
import product3 from "../../../Assets/catFood.jpg"
import product4 from "../../../Assets/feederWarmer.jpg"
import product5 from "../../../Assets/powder.jpg"
import product6 from "../../../Assets/watches.jpg"
let FlashSale = () =>{
    return(
      <div className="container">
      <h2>Flash Sale</h2>
      <div className="Products">
        <div class="product-card1">
          <div class="product-image">
            <img src={product1} alt="Ardino" />
          </div>
          <div class="product-details">
            <p class="product-description">Ardino</p>
            <p class="product-price">Rs.2050</p>
            <p class="product-discounted-price">Rs.3800</p>
            <p class="product-sale-percentage">-46%</p>
          </div>
        </div>
        <div class="product-card2">
          <div class="product-image">
            <img src={product2} alt="Laptop Cooling Pad" />
          </div>
          <div class="product-details">
            <p class="product-description">Laptop Cooling Pad Turbo Cooling pad for laptop - 2 Fans</p>
            <p class="product-price">Rs.699</p>
            <p class="product-discounted-price">Rs.1999</p>
            <p class="product-sale-percentage">-65%</p>
          </div>
        </div>
        <div class="product-card3">
          <div class="product-image">
            <img src={product3} alt="Cat Food" />
          </div>
          <div class="product-details">
            <p class="product-description">Cat Food</p>
            <p class="product-price">Rs.930</p>
            <p class="product-discounted-price">Rs.2200</p>
            <p class="product-sale-percentage">-58%</p>
          </div>
        </div>
        <div class="product-card4">
          <div class="product-image">
            <img src={product4} alt="Feeder Cleaner" />
          </div>
          <div class="product-details">
            <p class="product-description">Feeder Cleaner</p>
            <p class="product-price">Rs.700</p>
            <p class="product-discounted-price">Rs.700</p>
            <p class="product-sale-percentage">-0%</p>
          </div>
        </div>
        <div class="product-card5">
          <div class="product-image">
            <img src={product5} alt="Multi Vitamin Super Food" />
          </div>
          <div class="product-details">
            <p class="product-description">Multi Vitamin Super Food</p>
            <p class="product-price">Rs.600</p>
            <p class="product-discounted-price">Rs.999</p>
            <p class="product-sale-percentage">-39%</p>
          </div>
        </div>
        <div class="product-card6">
          <div class="product-image">
            <img src={product6} alt="Smart Watch" />
          </div>
          <div class="product-details">
            <p class="product-description">Smart Watch</p>
            <p class="product-price">Rs.600</p>
            <p class="product-discounted-price">Rs.999</p>
            <p class="product-sale-percentage">-39%</p>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default FlashSale