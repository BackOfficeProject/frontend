import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      // This is a mock login - replace with real API call
      if (email === "1234@test.com" && password === "1234") {
        setUser({ email, role: "admin" });
        return true;
      } else {
        throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
