// src/components/HeroSlider.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSlider({ slides = [], sectionTitle }) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slides.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  if (!slides.length) return null;

  const slide = slides[index];

  return (
    <section className="hero-section glass-card">
      <div className="hero-header">
        <h2>{sectionTitle}</h2>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`hero-dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-body">
        <div className="hero-text">
          <p className="hero-tag">{slide.tag}</p>
          <h3>{slide.title}</h3>
          <p className="hero-desc">{slide.description}</p>
          <button
            className="btn-primary"
            onClick={() => navigate(slide.ctaLink)}
          >
            {slide.ctaText}
          </button>
        </div>
        <div className="hero-meta">
          {slide.meta && (
            <>
              <div className="hero-chip">Entry from ₹{slide.meta.entry}</div>
              <div className="hero-chip">Prize pool ₹{slide.meta.prize}</div>
              <div className="hero-chip">
                Max {slide.meta.size} players/squad
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
