import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <AuthLayout
      leftContent={
        <>
          <div className="auth-logo">
            <img src={logo} alt="Nova Scotia Ale" />
          </div>

          <h2 className="auth-title">SIGN IN</h2>

          <label>Email</label>
          <input type="email" placeholder="Email" className="auth-input" />

          <label>Password</label>
          <input type="password" placeholder="Password" className="auth-input" />

          <button className="auth-button">Login</button>

          <div className="auth-bottom">
            <span>Don't have an account?</span>
            <Link to="/register" className="create-btn">
              Create new
            </Link>
          </div>
        </>
      }
      rightContent={
        <>
          <h1 className="auth-heading">
            Brewing Connections,<br />
            Building Community
          </h1>

          <p className="auth-description">
            At NovaScotiaAle, we believe in more than just business — 
            we believe in people, stories, and experiences that bring us together.
          </p>
        </>
      }
    />
  );
};

export default Login;