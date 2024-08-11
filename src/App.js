import React from "react";
import "./GlobalCSS.css";
import { Routes, Route } from "react-router-dom";
import { Registration } from "./Components/Registration";
import { Home } from "./Components/Home";
import { Header } from "./Model/Header";
import { Menu } from "./Model/Menu";
import { Login } from "./Components/Login";
import { Logout } from "./Components/LogOut";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check localStorage for the login status on initial load
    const loggedInStatus = localStorage.getItem("isAdminLoggedIn") === "false";
    setIsAdminLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem("isAdminLoggedIn", "true");
  };
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
  };
  return (
    <>
      <Header />
      <Menu isAdminLoggedIn={isAdminLoggedIn} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Logout onLogout={handleLogout} />} />
      </Routes>
    </>
  );
}

export default App;
