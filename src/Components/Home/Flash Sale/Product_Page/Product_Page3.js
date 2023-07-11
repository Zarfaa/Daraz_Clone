import CatFood from "../../../../Assets/catFood.jpg"
import "./Product_Page.css"
import Footer1 from "../../Footer/Footer1"
import Footer2 from "../../Footer/Footer2"
import React, { useState } from 'react';
let Product = () =>{
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
      setIsAddedToCart(true);
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 2000); // Remove the alert after 2 seconds
    };
  
    return(
        <>
        <div className="Product_Container">

            <div className="Product_image">
                <img src={CatFood} alt = "Cat Food"/>
            </div>

            <div className="Product_description">
                <h3>Cat Food</h3>
             <p>Tempered Glass Screen Protector For Mibro X1 Smart Watch – Single Pack</p>
             <p class="product-price">Rs.2050</p>
             <button onClick={handleAddToCart}>Add To Cart</button>
          {isAddedToCart && (
            <div className="cart-alert">Product added to cart!</div>
          )}
            </div>

        </div>
        <Footer1/>
        <Footer2/>
        </>
    )
}

export default Product