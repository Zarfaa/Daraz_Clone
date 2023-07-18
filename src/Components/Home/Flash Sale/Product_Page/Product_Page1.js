import React, { useState , useEffect} from 'react';
import Protector from "../../../../Assets/Protector.png";
import Footer1 from "../../Footer/Footer1"
import Footer2 from "../../Footer/Footer2"
import "./Product_Page.css";

const Product = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  const[popup,setPopup] = useState("")
  useEffect(()=>{
    alert("welcome to product1 page.")
  },[popup])

  return (
    <>
      <div className="Product_Container">
        <div className="Product_image">
          <img src={Protector} alt="Product" />
        </div>
        <div className="Product_description">
          <h3>Screen Protector</h3>
          <p>Tempered Glass Screen Protector For Mibro X1 Smart Watch – Single Pack</p>
          <p className="product-price">Rs.2050</p>
          <button onClick={handleAddToCart}>Add To Cart</button>
          {isAddedToCart && (
            <div className="cart-alert">Product added to cart!</div>
          )}
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Product;
