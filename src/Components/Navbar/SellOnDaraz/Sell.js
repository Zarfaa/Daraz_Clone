import Carousel from "./Carousel"
import Payment from "../../../Assets/Easypaisa.jpg"
import Learn from "../../../Assets/learn.jpg"
import DarazMall from "../../../Assets/MallSeller.jpg"
import local from "../../../Assets/localSeller.jpg"
import digital from "../../../Assets/digital.jpg"
import instructions from "../../../Assets/instructions.png"
import triple from "../../../Assets/tripleOrder.jpg"
import "./Sell.css"

const Sell = () => {    
  return (
    <>
    <Carousel/>
    <img className="Section_Images" src={Payment} alt="Payment Method" />
<br />
<img className="Section_Images" src={Learn} alt="Learn" />
<div className="Seller">
  <div>
    <img className="Image1" src={DarazMall} alt="Daraz Mall" />
  </div>
  <div>
    <img className="Image2" src={local} alt="Local Sellers" />
  </div>
  <div>
    <img src={digital} alt="Digital Goods" />
  </div>
</div>
<img className="Section_Images" src={triple} alt="Testimonial" />
<img className="Image3" src={instructions} alt="Instructions" />

    </>
  );
};

export default Sell;
