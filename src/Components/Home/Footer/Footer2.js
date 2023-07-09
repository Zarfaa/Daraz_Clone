import payment from "../../../Assets/payment_methods.png"
import verify from "../../../Assets/verification.png"
import international from "../../../Assets/daraz_international.png"
import social from "../../../Assets/social.png"
import "./Footer2.css"

let  Footer2 = () => {
    return(
<section  className="Footer2">
 <div>
    <h1>Payment Methods</h1>
    <img  src={payment} alt="payment methods"/>
    <p className="copy"> &copy; Daraz 2023</p>

</div>
 <div>
    <h1>Daraz International</h1>
    <img src={international} alt="payment methods"/>
    </div>
 <div>
    <h1>Follow Us</h1>
    <img  src={social} alt="social media acounts"/>
    </div>
 <div>
    <h1>Verified by</h1>
    <img  src={verify} alt="verification"/>
    </div>
</section>
    )}

export default Footer2