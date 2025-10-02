import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Full-width Banner */}
      <div className="about-banner fade-in">
        <h1>About TeachCraft</h1>
        <p>Empowering learners with everyday English and beyond.</p>
      </div>

      {/* Page Content */}
      <div className="about-content container">
        {/* Mission */}
        <section className="about-section fade-in-up delay-1">
          <h2>Our Mission</h2>
          <p>
            At <b>TeachCraft</b>, we connect schools and learners with skilled educators who inspire, empower, and create a lifelong love for learning English.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-section fade-in-up delay-2">
          <h2>What We Offer</h2>
          <div className="offer-cards">
            <div className="card">
              <span className="icon">🌍</span>
              <p>Global connections with passionate educators</p>
            </div>
            <div className="card">
              <span className="icon">📚</span>
              <p>Tailored English learning programs</p>
            </div>
            <div className="card">
              <span className="icon">🎉</span>
              <p>Fun and engaging English camps</p>
            </div>
            <div className="card">
              <span className="icon">🤝</span>
              <p>Strong partnerships with schools worldwide</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section fade-in-up delay-3">
          <h2>Why Choose Us?</h2>
          <p>
            With TeachCraft, students don’t just learn English—they build confidence, communication, and creativity for a brighter future.
          </p>
        </section>
      </div>
    </div>
  );
}
