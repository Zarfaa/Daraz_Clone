import "./DarazMall.css"
import product1 from "../../../Assets/goldtree.jpg"
import product2 from "../../../Assets/agaaz.jpg"
import product3 from "../../../Assets/salon.jpg"
import product4 from "../../../Assets/fresh.jpg"
import product5 from "../../../Assets/deli.jpg"
import product6 from "../../../Assets/skincare.jpg"
import { Link } from "react-router-dom"
let DarazMall = () =>{
    return(
<div className="grid">
  <h2>Daraz Mall</h2>

  <div className="Items">
    <div className="ProductCard">
      <img src={product6} alt="SKIN-CARE" />
      <p class="product-description">SKIN-CARE</p>
      <p class="product-description2">SKIN-CARE</p>
    </div>

    <div className="ProductCard">
    <Link to="Jewelery">
      <img src={product1} alt="Gold Tree Millers" />
      <p class="product-description">Gold Tree Millers</p>
      <p class="product-description2">Gold Tree Millers</p>
      </Link>
    </div>

    <div className="ProductCard">
    <Link to="Electronics">
      <img src={product2} alt="Agaaaz" />
      <p class="product-description">Agaaaz</p>
      <p class="product-description2">Agaaaz</p>
      </Link>
    </div>

    <div className="ProductCard">
    <Link to="SClothing">
      <img src={product3} alt="Salon Designers" />
      <p class="product-description">Salon Designers</p>
      <p class="product-description2">Salon Designers</p>
      </Link>
    </div>

    <div className="ProductCard">
    <Link to="MClothing">
      <img src={product4} alt="Sourceco.pk Fresh Islamabad" />
      <p class="product-description">Sourceco.pk Fresh Islamabad</p>
      <p class="product-description2">Sourceco.pk Fresh Islamabad</p>
      </Link >
    </div>

    <div className="ProductCard">
    <Link to="Electronics">
      <img src={product5} alt="Deli" />
      <p class="product-description">Deli</p>
      <p class="product-description2">Deli</p>
      </Link>
    </div>
  </div>
</div>

    )
}

export default DarazMall