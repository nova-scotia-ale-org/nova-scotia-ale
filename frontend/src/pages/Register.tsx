import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";
import { register } from "../api/authApi";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register({ name, email, password });

      alert("Successfully Registered ✅");

      nav("/login");
    } catch (err: any) {
      const backendError = err?.response?.data?.error;

      if (typeof backendError === "string") {
        setError(backendError);
        return;
      }

      setError("Registration failed");
    }
  };

  return (
    <AuthLayout
      leftContent={
        <>
          <div className="auth-logo">
            <img src={logo} alt="Nova Scotia Ale" />
          </div>

          <h2 className="auth-title">CREATE ACCOUNT</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={onSubmit}>
            <label>Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" className="auth-input" />

            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="auth-input" />

            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="auth-input" autoComplete="new-password" />

            <button className="auth-button" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="auth-bottom">
            <span>Already have an account?</span>
            <Link to="/login" className="create-btn">Login</Link>
          </div>
        </>
      }
      rightContent={
        <>
          <h1 className="auth-heading">Join The Community</h1>
          <p className="auth-description">Find rooms, jobs, and rides in one place.</p>
        </>
      }
    />
  );
};

export default Register;