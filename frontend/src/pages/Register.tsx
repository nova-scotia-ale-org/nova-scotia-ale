import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";
import { register } from "../api/authApi";
import Swal from "sweetalert2";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--color-primary").trim();
    const secondary = styles.getPropertyValue("--color-secondary").trim();
    const accent = styles.getPropertyValue("--color-accent").trim();
    const textDark = styles.getPropertyValue("--color-text-dark").trim();

    // 🔄 Loader Modal
    Swal.fire({
      title: "Creating your account...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
      background: accent,
      color: textDark,
    });

    try {
      const data = await register({ name, email, password });

      // 🟡 Success Modal (Brand Theme)
      await Swal.fire({
        icon: "success",
        title: `Welcome ${name} 🎉`,
        text: "Your Nova Scotia Ale journey begins now!",
        confirmButtonText: "Go to Login",
        confirmButtonColor: primary,
        background: secondary,
        color: accent,
        iconColor: primary,
      });

      nav("/login");
    } catch (err: any) {
      const backendError = err?.response?.data?.error;

      // ❌ Error Modal
      await Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: backendError || "Something went wrong",
        confirmButtonText: "Try Again",
        confirmButtonColor: primary,
        background: accent,
        color: textDark,
        iconColor: secondary,
      });
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

          <form onSubmit={onSubmit}>
            <label>Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="auth-input"
            />

            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="auth-input"
            />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="auth-input"
              autoComplete="new-password"
            />

            <button className="auth-button" type="submit">
              Register
            </button>
          </form>

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
          <h1 className="auth-heading">Join The Community</h1>
          <p className="auth-description">
            Find rooms, jobs, and rides in one place.
          </p>
        </>
      }
    />
  );
};

export default Register;