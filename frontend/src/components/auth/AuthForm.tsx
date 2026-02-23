import { Link } from "react-router-dom";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const isLogin = type === "login";

  return (
    <>
      <h2 className="auth-title">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>

      <p className="auth-subtitle">
        {isLogin
          ? "Login to access your account"
          : "Join Nova Scotia Ale community"}
      </p>

      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
          />
        )}

        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="auth-switch">
        {isLogin ? (
          <>
            Don’t have an account? <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            Already have an account? <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default AuthForm;