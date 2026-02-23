import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";

const Register = () => {
  return (
    <AuthLayout
      leftContent={
        <>
          <div className="auth-logo">
            <img src={logo} alt="Nova Scotia Ale" />
          </div>

          <h2 className="auth-title">CREATE ACCOUNT</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Full Name" className="auth-input" />

          <label>Email</label>
          <input type="email" placeholder="Email" className="auth-input" />

          <label>Password</label>
          <input type="password" placeholder="Password" className="auth-input" />

          <button className="auth-button">Register</button>

          <div className="auth-bottom">
            <span>Already have an account?</span>
            <Link to="/login" className="create-btn">
              Login
            </Link>
          </div>
        </>
      }
      rightContent={
        <>
          <h1 className="auth-heading">
            Join The Community
          </h1>

          <p className="auth-description">
            Find rooms, jobs, and rides in one place.
          </p>
        </>
      }
    />
  );
};

export default Register;