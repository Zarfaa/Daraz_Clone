import image1 from "../../../Assets/Daraz_Affiliate.png"
import Affiliate2 from "../../../Assets/Daraz_Affiliate2.png"
import image3 from "../../../Assets/work_With_Daraz.jpg"
import image4 from "../../../Assets/work_With_Daraz2.jpg"
import Footer1 from "../../Home/Footer/Footer1"
import Footer2 from "../../Home/Footer/Footer2"



import "./Affiliate.css"

let Affiliate = () =>{
    return(
        <div>
        <img className="image1" src={image1} alt="Affiliate1" />
        <img className="image2" src={Affiliate2} alt="Affiliate2" />
        <div>
          <button className="Sbutton">SIGN UP NOW</button>
        </div>
        <img className="image2" src={image3} alt="Affiliate3" />
        <img className="image2" src={image4} alt="Affiliate4" />   
         <div>
         <button className="Sbutton">SIGN UP NOW</button>
         <div className="Aggreement">
         <h1>Affiliate Agreement </h1>
         <p>Affiliate Marketing in Pakistan Terms and Conditions (the “Agr eement”) shall constitute an Agreement between you (“You” or “Affiliate”) and the Company, for the registration and appointment of the Affiliate to provide the Company with Promotion of the Channels. The Affiliate and the Company shall collectively be referred to as the “Parties” and individually as the “Party”.</p>
         <p>The Affiliate must read, agree to, and accept all of the terms and provisions contained in this
Agreement, by clicking “I Accept” button, and the Parties hereby agree, acknowledge and accept that clicking such button shall instantly form a valid, effective and legally binding agreement for good consideration between the Parties. </p>
         <p>This Agreement constitutes the complete and exclusive statement of the agreement of both the Parties with respect to the subject matter of this Agreement, and supersede all prior oral and written commitments, understandings, and communications between the Parties regarding such matter. The Company may, at its sole discretion, amend the Agreement, from time to time, by providing the revised version(s) of the same to the Affiliate in writing, at the sole discretion of the Company, without being required to give any prior notice to the Affiliate. Any continued performance of its obligations under this Agreement, by the Affiliate after the revised Agreement has come into effect shall be deemed as the Affiliate’s consent to such revised Agreement. </p>
         <p>WHEREAS, the Company is engaged in the provision of advertising services and Affiliate is willing and able to provide promotional services and content of the Channels to Customers, for the Company, for the purpose of increasing the user traffic on those Channels. The Company now engages the Affiliate, and the Affiliate accepts such engagement, to perform the Promotion of the Channels in the Territory on the terms and conditions specified herein. </p>
         <h3 className="definitions">1. DEFINITIONS </h3>
         <p>1.1 Advertising Material shall mean any advertising materials provided by the Company to the Affiliate, to be published by the Affiliate on the Affiliate’s Accounts solely for the purposes of conducting the Promotion of the Channels, in accordance with the terms and conditions herein.</p>
         <p>1.2 “Affiliate” or “You” shall have the meaning given to the term in the Preamble above (i.e. the first Party named above, who shall be engaged for the purpose of, and authorized by the Company to promote the Channels on the terms and conditions of this Agreement).</p>
         <p>“Affiliate’s Account” shall mean all advertising and/or promotion-capable medias utilized by the Affiliate, including without limitation websites, applications, social media accounts, emails, audiovisual media channels (whether digital or traditional), newsletters, Affiliate networks' sub affiliates, their owned and brokered medias, to publish the Advertising Materials for the Promotional of the Channels, in accordance with the terms hereunder.</p>
         <p>1.4 “Agreement” shall have the meaning given to the term in the Preamble above (i.e. these Affiliate Terms and Conditions).
</p>
         <p>1.5 “Channels” shall mean the online marketplace operating under the style and name of ‘Daraz’, through collectively through the (1) mobile application of the same name and (2) the web portals located at
</p>
         <p>1.6 “Chargeback” shall mean a charge that is returned to a Customer’s payment card (whether a debit, credit, or charge card as the case may be) after the Customer successfully disputes an item on their card’s account statement or transactions report with that Customer’s bank.</p>
        <h3> 21. ATTORNEY’S FEES.</h3>
<p>If suit or action is instituted in connection with any controversy arising out of this Agreement or an enforcement of any right hereunder, the prevailing Party shall be entitled to recover, in addition to costs, such sums as the court may adjudge reasonable as attorney’s fees, including fees on any appeal.</p>

<h3>22. NOTICES.</h3>
<p>Any notice to be given or served upon any Party to this Agreement must be in writing and shall be deemed to have been given (i) upon receipt in the event of personal service by actual delivery (including by telecopy or delivery service); (ii) upon posting if deposited in the local post office with proper postage and dispatched by certified mail; or (iii) upon receipt if notice is given otherwise than by personal service or by certified mail. Notices may also be transmitted by facsimile or electronic mail, provided that proper arrangements are made in advance to facilitate such communications and provide for their security and verification.</p>
         </div>
         </div>
         <Footer1/>
            
         <Footer2/>
        </div>
    )
}

export default Affiliate