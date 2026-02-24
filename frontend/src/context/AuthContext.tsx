import { createContext, useContext, useState } from "react";

export type User = {
  id: string;
  email: string;
  name?: string;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  register: (user: User, token: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  // 🔥 Initialize BOTH user and token from localStorage
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("nsale_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("nsale_token");
  });

  const login = (user: User, token: string) => {
    localStorage.setItem("nsale_user", JSON.stringify(user));
    localStorage.setItem("nsale_token", token);

    setUser(user);
    setToken(token);
  };

  const register = (user: User, token: string) => {
    localStorage.setItem("nsale_user", JSON.stringify(user));
    localStorage.setItem("nsale_token", token);

    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("nsale_user");
    localStorage.removeItem("nsale_token");

    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user && !!token,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
      register: () => {},
    };
  }

  return context;
};