import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const setActive = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");

  return (
    <header className="nav-shell">
      {/* LEFT LOGO */}
      <div className="nav-logo">
        <span className="logo-main">PK</span>
        <span className="logo-sub">Esports</span>
      </div>

      {/* DESKTOP NAV ONLY */}
      <nav className="nav-links desktop-only">
        <NavLink to="/" className={setActive}>Home</NavLink>
        <NavLink to="/tournaments" className={setActive}>Tournaments</NavLink>
        <NavLink to="/login" className={setActive}>Login / Signup</NavLink>
        <NavLink to="/about" className={setActive}>About Us</NavLink>
        <NavLink to="/contact" className={setActive}>Contact Us</NavLink>
      </nav>
    </header>
  );
}
