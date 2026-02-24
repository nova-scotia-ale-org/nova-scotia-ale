import { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: string;
  email: string;
  name?: string;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("nsale_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User, token: string) => {
    localStorage.setItem("nsale_token", token);
    localStorage.setItem("nsale_user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("nsale_token");
    localStorage.removeItem("nsale_user");
    setUser(null);
    
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  // If no provider (like in tests), return safe fallback
  if (!context) {
    return {
      user: null,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
    };
  }

  return context;
};