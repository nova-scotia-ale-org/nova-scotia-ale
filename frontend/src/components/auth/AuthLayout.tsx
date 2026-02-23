import React from "react";

interface AuthLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="auth-section">
      <div className="auth-wrapper">
        <div className="auth-left">
          {leftContent}
        </div>
        <div className="auth-right">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;