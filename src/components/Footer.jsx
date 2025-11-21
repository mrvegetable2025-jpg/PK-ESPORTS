// src/components/Footer.jsx
import React from "react";
import "../styles/tournament-card.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} PK Esports • Built for Free Fire
        Tournaments
      </p>
      <p className="footer-tag">pk esports</p>
    </footer>
  );
}
