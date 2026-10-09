import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const read = (k, d) => JSON.parse(localStorage.getItem(k) || d);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read("eh_user", "null"));

  const signup = ({ name, email, password }) => {
    const users = read("eh_users", "[]");
    if (users.find((u) => u.email === email))
      return { ok: false, error: "This email is already registered." };
    users.push({ name, email, password });
    localStorage.setItem("eh_users", JSON.stringify(users));
    const u = { name, email };
    localStorage.setItem("eh_user", JSON.stringify(u));
    setUser(u);
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const found = read("eh_users", "[]").find(
      (u) => u.email === email && u.password === password
    );
    if (!found) return { ok: false, error: "Invalid email or password." };
    const u = { name: found.name, email: found.email };
    localStorage.setItem("eh_user", JSON.stringify(u));
    setUser(u);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem("eh_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}