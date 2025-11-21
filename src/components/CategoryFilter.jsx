// src/components/CategoryFilter.jsx
import React from "react";

export default function CategoryFilter({
  modeFilter,
  setModeFilter,
  csTypeFilter,
  setCsTypeFilter,
  searchText,
  setSearchText,
}) {
  return (
    <div className="filter-bar glass-card">
      <div className="filter-row">
        <button
          className={`filter-pill ${modeFilter === "ALL" ? "active" : ""}`}
          onClick={() => setModeFilter("ALL")}
        >
          All
        </button>
        <button
          className={`filter-pill ${modeFilter === "BR" ? "active" : ""}`}
          onClick={() => setModeFilter("BR")}
        >
          BR Tournaments
        </button>
        <button
          className={`filter-pill ${modeFilter === "CS" ? "active" : ""}`}
          onClick={() => setModeFilter("CS")}
        >
          CS Tournaments
        </button>
      </div>

      {modeFilter === "CS" && (
        <div className="filter-row">
          {["ALL", "1v1", "2v2", "3v3", "4v4"].map((type) => (
            <button
              key={type}
              className={`filter-pill ${csTypeFilter === type ? "active" : ""}`}
              onClick={() => setCsTypeFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      <input
        type="text"
        className="filter-input"
        placeholder="Search by tournament ID or name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
}
