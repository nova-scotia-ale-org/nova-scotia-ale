import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import logo from "../assets/images/logo.png";
import { login } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import Swal from "sweetalert2";



const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login: loginToContext } = useAuth();

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--color-primary").trim();
    const secondary = styles.getPropertyValue("--color-secondary").trim();
    const accent = styles.getPropertyValue("--color-accent").trim();
    const textDark = styles.getPropertyValue("--color-text-dark").trim();

    // ✅ LOADER (no data used here)
    Swal.fire({
      title: "Signing you in...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
      background: accent,
      color: textDark,
    });

    try {
      const data = await login({ email, password });
      loginToContext(data.user, data.access_token);

      // ✅ SUCCESS (data exists here)
      await Swal.fire({
        icon: "success",
        title: `Welcome ${data.user.name || ""} 👋`,
        text: "Brewing your experience...",
        showConfirmButton: true,
        confirmButtonText: "Continue",
        confirmButtonColor: primary,
        background: secondary,
        color: accent,
        iconColor: primary,
      });

      nav("/");
    } catch (err: any) {
      const backendError = err?.response?.data?.error;

      await Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: backendError || "Invalid email or password",
        confirmButtonText: "OK",
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

          <h2 className="auth-title">SIGN IN</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={onSubmit}>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="auth-input"
              autoComplete="email"
            />

            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="auth-input"
              autoComplete="current-password"
            />

            <button className="auth-button" type="submit">
              Login
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <GoogleLoginButton onClick={handleGoogleLogin} />

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
            Brewing Connections,<br />Building Community
          </h1>
          <p className="auth-description">
            At NovaScotiaAle, we believe in more than just business — we
            believe in people, stories, and experiences that bring us together.
          </p>
        </>
      }
    />
  );
};

export default Login; 