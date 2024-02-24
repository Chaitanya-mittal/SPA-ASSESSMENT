import { NavLink } from "react-router-dom";
import "./SignIn.scss";
function SignIn() {
  return (
    <div className="signInBox">
      <h2 className="signInText">Sign up and get exclusive special deals</h2>
      <div className="EmailBox">
        <input type="email" />
        <NavLink className="signinbtn">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default SignIn;
