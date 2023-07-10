import "./Navbar.css"
import {Link} from "react-router-dom";
import logo from "../../Assets/daraz.png"
import buttonIcon from "../../Assets/ButtonIcon.png"
import CartIcon from "../../Assets/cart.png"
import App from "../../Assets/App.png"

let Navbar = () => {
 return (
   <header  className="Nav_Container"  >

<div>
      <nav className="NavBar1">
        <ul className="navbar-list">
          <li><Link className="Save_on_app">SAVE MORE ON APP</Link></li>
          <li><Link to="Affiliate">DARAZ AFFILIATE PROGRAM</Link></li>
          <li><Link to="Sell">SELL ON DARAZ</Link></li>
          <li><Link >CUSTOMER CARE</Link></li>
          <li><Link >TRACK YOUR ORDER</Link></li>
          <li><Link to="/signup">SIGNUP</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link>زبان تبدیل کریں</Link></li>
        </ul>
      </nav>
    </div>

    <div>
      <nav className="NavBar2" >
        <div>
          <div>
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Daraz" />
        </Link>
        </div>
        <div className="dropdown_Menu" >
           <div className="dropdown">
   <button className="dropbtn" >Categories</button>
  <div class="dropdown-content">
    <Link to="/Mart">Groceries & Pets</Link>
    <Link to="Beauty">Health & Beauty</Link>
     <Link to="Fashion">Women's Fashion</Link>
    <Link to="/HomeDecor">Home & Lifestyle</Link>
       </div>
       </div>
        </div>
        </div>
        <form className="form__conatiner ">
          <input placeholder="Search in Daraz"></input>
          <button className="custom-button">
            <img className="button_image" src={buttonIcon} alt="Button" />
          </button>
        </form>
        <Link to="/Login">
          <img className="cart-logo" src={CartIcon} alt="Cart" />
        </Link>
        <Link to="/Download">
          <img className="App-logo" src={App} alt="Download Daraz App" />
        </Link>  
      </nav>
     
    </div>
  </header>
 );

}

export default Navbar;
