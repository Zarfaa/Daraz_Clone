import "./Buttons.css"
import Mart from "../../../Assets/Mart.png"
import Fashion from "../../../Assets/WomenFashion.png"
import Beauty from "../../../Assets/Beauty.png"
import Decor from "../../../Assets/HomeDecor.png"
import {Link} from "react-router-dom";

let Buttons = () => {
    return(
        <section className="button_container">
        <div>
        <Link to="/Mart">
          <button className="custom-button1">
            <img className="button_img" src={Mart} alt="Mart" /> Mart
          </button>
          </Link>
        </div>
        <div>
        <Link to="/Fashion">
          <button className="custom-button2">
            <img className="button_img" src={Fashion} alt="Fashion" /> Fashion
          </button>
          </Link>
        </div>
        <div>
        <Link to="/Beauty">
          <button className="custom-button3">
            <img className="button_img" src={Beauty} alt="Beauty" />Beauty
          </button>
          </Link>
        </div>
        <div>
        <Link to="/HomeDecor">
          <button className="custom-button4">
            <img className="button_img" src={Decor} alt="Home & Decor" />Home & Decor
          </button>
          </Link>
        </div>
      </section>
      
    )
}

export default Buttons