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
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your first and last name"
              required
            />
          </div>
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Minimum 6 characters with a number and a letter"
                required
              />
            </div>
            <div class="form-row">
  <div class="row-item">
    <label for="birthdayMonth">Birthday</label>
    <select id="birthdayMonth">
      <option value="">Select</option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
    </select>
    <select id="birthdayDay">
      <option value="">Select</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </select>
    <select id="birthdayYear">
      <option value="">Select</option>
      <option>2000</option>
      <option>2002</option>
      <option>2003</option>
    </select>
    <label for="gender">Gender</label>
    <select id="gender">
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    </div>
</div>
<div class="form-row">
  <button>SIGN UP</button>
</div>
          </form>
        </div>
      </div>
     
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Signup;
