import React from "react";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button className="google-btn" onClick={onClick}>
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google logo"
        width="20"
        height="20"
        style={{ marginRight: "10px" }}
      />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;