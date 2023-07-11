import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer1 from '../Home/Footer/Footer1';
import Footer2 from '../Home/Footer/Footer2';
import "./SingleProduct.css"
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
      setIsAddedToCart(true);
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 2000); 
    };
  
  return (
    <>
    <div className="Product-card">
      <div className="Product-Img">
      <img src={product.image} alt={product.title} />
      </div>
      <div className="Product-Details">
      <h2>{product.title}</h2>
      <p id="Product-description">{product.description}</p>
      <p id="Product-price">${product.price}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
          {isAddedToCart && (
            <div className="cart-alert">Product added to cart!</div>
          )}
      </div>
    </div>
    <Footer1/>
    <Footer2/>
    </>
  );
};

export default SingleProduct;
