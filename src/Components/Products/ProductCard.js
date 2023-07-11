import React from "react";
import Products from "./Products";
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";
import "./Products.css"; 

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((element) => {
            return (
              <div className="col-md-3" key={element.id}>
                <Link to={`/products/${element.id}`}>
                  <Products
                    title={element.title}
                    image={element.image}
                    price={element.price}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
