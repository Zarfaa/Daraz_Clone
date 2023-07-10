import Food from "../../Assets/powder.jpg"
import "./Product_Page.css"
import Footer1 from "../Home/Footer/Footer1"
import Footer2 from "../Home/Footer/Footer2"
let Product = () =>
{
    return(
        <>
        <div className="Product_Container">

            <div className="Product_image">
                <img src={Food} alt = " Food"/>
            </div>

            <div className="Product_description">
                <h3>Cat Food</h3>
             <p>Tempered Glass Screen Protector For Mibro X1 Smart Watch – Single Pack</p>
             <p class="product-price">Rs.2050</p>
            <button>Add To Cart</button>
            </div>

        </div>
        <Footer1/>
        <Footer2/>
        </>
    )
}

export default Product