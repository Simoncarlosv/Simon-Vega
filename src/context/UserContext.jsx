import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      setUser({ token: storedUser });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5146/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser({ username: data.username, token: data.token });
    } catch (error) {
      console.error("Error en login:", error.message);
    }
  };

  // Logout ahora con `navigate` como parámetro
  const logout = (navigate) => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Redirige a Home.jsx
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);