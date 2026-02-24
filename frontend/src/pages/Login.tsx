import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";
import { login } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login: loginToContext } = useAuth();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login({ email, password });
      loginToContext(data.user, data.access_token);

      alert("Successfully Logged In 🎉");

      nav("/");
    } catch (err: any) {
      const backendError = err?.response?.data?.error;

      if (typeof backendError === "string") {
        setError(backendError);
        return;
      }

      setError("Login failed");
    }
  };

  return (
    <AuthLayout
      leftContent={
        <>
          <div className="auth-logo">
            <img src={logo} alt="Nova Scotia Ale" />
          </div>

          <h2 className="auth-title">SIGN IN</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={onSubmit}>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="auth-input" autoComplete="email" />

            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="auth-input" autoComplete="current-password" />

            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="auth-bottom">
            <span>Don't have an account?</span>
            <Link to="/register" className="create-btn">Create new</Link>
          </div>
        </>
      }
      rightContent={
        <>
          <h1 className="auth-heading">
            Brewing Connections,<br />Building Community
          </h1>
          <p className="auth-description">
            At NovaScotiaAle, we believe in more than just business — we believe in people, stories, and experiences that bring us together.
          </p>
        </>
      }
    />
  );
};

export default Login;