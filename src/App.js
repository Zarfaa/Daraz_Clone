import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Signup from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import Home from './Components/Home/Home';
import Affiliate from './Components/DarazAffiliate/Affiliate';
import Sell from "./Components/SellOnDaraz/Sell"
import Mart from "./Components/Mart_Button/Mart"
import Beauty from "./Components/Beauty_Button/Beauty"
import Fashion from "./Components/Fashion_Button/Fashion"
import HomeDecor from "./Components/HomeDocor_Button/Home_Decor"
import ProductPage1 from "./Components/Product_Page/Product_Page1"
import ProductPage2 from "./Components/Product_Page/Product_Page2"
import ProductPage3 from "./Components/Product_Page/Product_Page3"
import ProductPage4 from "./Components/Product_Page/Product_Page4"
import ProductPage5 from "./Components/Product_Page/Product_Page5"
import ProductPage6 from "./Components/Product_Page/Product_Page6"
function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Affiliate" element={<Affiliate/>}></Route>
            <Route path="/Sell" element={<Sell/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Mart" element={<Mart/>}></Route>
            <Route path="/Fashion" element={<Fashion/>}></Route>
            <Route path="/Beauty" element={<Beauty/>}></Route>
            <Route path="/HomeDecor" element={<HomeDecor/>}></Route>
            <Route path="/ProductPage1" element={<ProductPage1/>}></Route>
            <Route path="/ProductPage2" element={<ProductPage2/>}></Route>
            <Route path="/ProductPage3" element={<ProductPage3/>}></Route>
            <Route path="/ProductPage4" element={<ProductPage4/>}></Route>
            <Route path="/ProductPage5" element={<ProductPage5/>}></Route>
            <Route path="/ProductPage6" element={<ProductPage6/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;