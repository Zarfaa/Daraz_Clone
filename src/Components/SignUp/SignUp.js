import "./SignUp.css";
import Footer1 from "../Home/Footer/Footer1";
import Footer2 from "../Home/Footer/Footer2";

let Signup = () => {
  return (
    <>
    <h2 className="form-title">Create your Daraz Account</h2>
      <div className="form-container">
        <div className="column">
          <form>
            <div className="form-row">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Please enter your phone number"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="verificationCode">
                Verification Code from WhatsApp
              </label>
              <input
                type="text"
                id="verificationCode"
                placeholder="Verification Code"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Minimum 6 characters with a number and a letter"
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="birthdayMonth">Birthday</label>
              <select id="birthdayMonth">
                <option value="">Month</option>
              </select>
              <select id="birthdayDay">
                <option value="">Day</option>
              </select>
              <select id="birthdayYear">
                <option value="">Year</option>
              </select>
              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </form>
        </div>
        <div className="column">

          <div className="form-row">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your first and last name"
              required
            />
          </div>

          <div className="form-row">
            <input type="checkbox" id="exclusiveOffers" checked />
            <label htmlFor="exclusiveOffers">
              I'd like to receive exclusive offers and promotions via SMS
            </label>
          </div>
          <div className="form-row">
            <input type="submit" value="SIGN UP" />
          </div>
          <div className="form-row">
      <p className="Policy_text">
        By clicking “SIGN UP”, I agree to Daraz's Terms of Use and Privacy
        Policy
      </p>
      <p className="Policy_text">Or, sign up with:</p>
      </div>
      <div className="form-row">
      <div className="social-login">
        <button className="facebook">Facebook</button>
        <button className="google">Google</button>
      </div>
      </div>
        </div>

      </div>
     
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Signup;
