import "./Footer1.css"
import Scanner from "../../../Assets/scanner.png"
import FooterImg from "../../../Assets/footer_image.png"
import logo from "../../../Assets/footer_logo.png"

let  Footer1 = () => {
    return(
             <section className="Footer1">
       <div><h1>Customer Care</h1>
<p>Help Center<br/>How to Buy<br/>
Corporate & Bulk Purchasing<br/>
Returns & Refunds<br/>
Daraz Shop<br/>
Contact Us<br/>
Purchase Protection
Daraz Pick up Points</p>
<h1>Make Money With Us</h1>
<p>Daraz University
Sell on Daraz
Join Daraz Affiliate Program
</p>
</div> 
<div>
<h1>Daraz</h1>
<p>About Us<br/>
Digital Payments<br/>
Daraz Donates<br/>
Daraz Blog<br/>
Terms & Conditions<br/>
Privacy Policy<br/>
NTN Number : 4012118-6<br/>
STRN Number : 1700401211818<br/>
Online Shopping App<br/>
Online Grocery Shopping<br/>
Daraz Exclusive
How to shop on Daraz</p>
</div>
<div>
    <img className="ScannerImg" src={Scanner} alt="MRI Code"/>
    <img className="logo" src={logo} alt="MRI Code"/>
    <p  className="logo_text">Happy Shopping</p><p className="text">Download App</p>
    <img className="FooterImg" src={FooterImg} alt="footerImage"/>
</div>
</section>
    )}
    export default Footer1