// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
  token: null,
  email: null,
  setToken: () => { },
  isAuthenticated: false,
  login: (token) => { },
  logout: () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setEmail(decoded.email); // Decode and get the email from JWT
    } else {
      setEmail(null); // If no token, reset email
    }
  }, [token]);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = token !== null;

  return (
    <AuthContext.Provider value={{ token, email, setToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
