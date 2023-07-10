import "./Login.css";
import Footer1 from "../Home/Footer/Footer1";
import Footer2 from "../Home/Footer/Footer2";

let Signup = () => {
  return (
    <>
    <h2 className="form-title">Welcome to Daraz! Please login.</h2>
      <div className="Login-container">
          <form>
            <div className="row">
              <label htmlFor="phoneNumber">Phone Number or Email</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Please enter your phone number or Email"
                required
              />
            </div>

            <div className="row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                required
              />
            </div>
            <div className="row">
            <button>LOGIN</button>
            </div>
          </form>
          </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Signup;
