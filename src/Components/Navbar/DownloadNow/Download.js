import DownloadApp1 from "../../../Assets/NavBar_DownloadNowButton_Img1.jpeg"
import DownloadApp2 from "../../../Assets/NavBar_DownloadNowButton_Img2.jpeg"
import DownloadApp3 from "../../../Assets/NavBar_DownloadNowButton_Img3.jpeg"
import DownloadApp4 from "../../../Assets/NavBar_DownloadNowButton_Img4.jpeg"
import DownloadApp5 from "../../../Assets/NavBar_DownloadNowButton_Img5.jpeg"
import DownloadApp6 from "../../../Assets/NavBar_DownloadNowButton_Img6.png"
import Footer1 from "../../Home/Footer/Footer1"
import Footer2 from "../../Home/Footer/Footer2"
import "./Download.css"
let Download = () =>{
    return(
        <>
        <div className="img_container">
          <div><img src={DownloadApp1} alt="DownloadApp1"/></div>
          <div><img src={DownloadApp2} alt="DownloadApp2"/></div>
          <div><img src={DownloadApp3} alt="DownloadApp4"/></div>
          <div><img src={DownloadApp4} alt="DownloadApp4"/></div>
          <div><img src={DownloadApp5} alt="DownloadApp5"/></div>
          <div><img src={DownloadApp6} alt="DownloadApp6"/></div>
        </div>
        <Footer1/>
        <Footer2/>
        </>
    )
}

export default Download



