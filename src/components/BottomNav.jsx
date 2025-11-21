// src/components/BottomNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaGamepad, FaUserAlt, FaPhone } from "react-icons/fa";
import "../styles/bottomnav.css";

export default function BottomNav() {
  const getClass = ({ isActive }) =>
    isActive ? "b-item active" : "b-item";

  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={getClass}>
        <div className="b-icon">
          <FaHome />
        </div>
        <span className="b-label">Home</span>
      </NavLink>

      <NavLink to="/tournaments" className={getClass}>
        <div className="b-icon">
          <FaGamepad />
        </div>
        <span className="b-label">Play</span>
      </NavLink>

      <NavLink to="/login" className={getClass}>
        <div className="b-icon">
          <FaUserAlt />
        </div>
        <span className="b-label">Account</span>
      </NavLink>

      <NavLink to="/contact" className={getClass}>
        <div className="b-icon">
          <FaPhone />
        </div>
        <span className="b-label">Contact</span>
      </NavLink>
    </nav>
  );
}
