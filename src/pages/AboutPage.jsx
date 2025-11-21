import React from "react";
import "../styles/about.css";

export default function AboutPage() {
  return (
    <div className="about-main">
      <h1 className="about-title">ABOUT PK ESPORTS</h1>

      {/* CARD 1 */}
      <div className="about-card">
        <h2>Who We Are</h2>
        <p>
          PK Esports is a professional Free Fire tournament organizer providing
          fair, transparent and automated BR & CS tournaments through Google
          Sheets, WhatsApp alerts and live slot monitoring.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="about-card">
        <h2>Tournament System</h2>
        <ul>
          <li>Daily BR & CS Custom Rooms</li>
          <li>Digital slot booking (Google Sheets)</li>
          <li>Automatic WhatsApp alerts</li>
          <li>Anti-hacker strict room monitoring</li>
          <li>Prize Pool management with transparency</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div className="about-card">
        <h2>Guild Details</h2>
        <ul>
          <li>Guild Name: PK ESPORTS</li>
          <li>Guild UID: 1092837456</li>
          <li>Guild Level: 10</li>
          <li>Active Members: 48</li>
          <li>BR & CS Competitive Squads</li>
        </ul>
      </div>

      {/* CARD 4 */}
      <div className="about-card">
        <h2>Players & Team Strength</h2>
        <ul>
          <li>Top BR & CS Champions</li>
          <li>Snipers, Rushers, Support Specialists</li>
          <li>Daily Training & Scrims</li>
          <li>Professional Team Coordination</li>
          <li>Guild Wars & Clan Events</li>
        </ul>
      </div>
    </div>
  );
}
