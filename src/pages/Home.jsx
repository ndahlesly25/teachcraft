import React from "react";
import Slideshow from "../components/Slideshow";
import { FaChalkboardTeacher, FaLightbulb, FaCogs, FaGlobe, FaHandshake, FaRocket } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Slideshow Section */}
      <header className="slideshow-header fade-in">
        <Slideshow />
      </header>

      {/* Floating Icons */}
      <div className="floating-icons">
        <span className="icon" style={{ top: "10%", left: "5%" }}>📚</span>
        <span className="icon" style={{ top: "20%", left: "80%" }}>✏️</span>
        <span className="icon" style={{ top: "70%", left: "15%" }}>🖍️</span>
        <span className="icon" style={{ top: "80%", left: "70%" }}>🎓</span>
      </div>

      {/* Welcome / Overview Section */}
      <section id="overview" className="section fade-in-up">
        <h2 className="section-title">Welcome to TeachCraft</h2>
        <p className="section-subtitle">
          TeachCraft is your premier partner in cultivating confident English speakers. 
          We combine innovative teaching methods with highly skilled educators to create 
          immersive learning experiences that inspire curiosity, creativity, and critical thinking.
        </p>

        {/* Feature Cards */}
        <div className="features-grid">
          <div className="feature-card fade-in-up delay-1">
            <FaChalkboardTeacher className="feature-icon" />
            <h3>Expert Educators</h3>
            <p>Our teachers bring excellence, enthusiasm, and a wealth of experience to every lesson.</p>
          </div>
          <div className="feature-card fade-in-up delay-2">
            <FaLightbulb className="feature-icon" />
            <h3>Interactive Learning</h3>
            <p>Engaging programs and activities make learning English exciting and meaningful.</p>
          </div>
          <div className="feature-card fade-in-up delay-3">
            <FaCogs className="feature-icon" />
            <h3>Custom Solutions</h3>
            <p>We provide tailored approaches to meet unique learning goals for schools and individuals.</p>
          </div>
          <div className="feature-card fade-in-up delay-4">
            <FaGlobe className="feature-icon" />
            <h3>Global Mindset</h3>
            <p>We prepare students to communicate effectively in a diverse, interconnected world.</p>
          </div>
        </div>

        {/* Our Approach Section */}
        <section id="approach" className="section fade-in-up delay-5">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">
            At TeachCraft, we follow a structured yet flexible approach to ensure every learner thrives:
          </p>
          <div className="approach-grid">
            <div className="approach-card fade-in-up delay-6">
              <FaHandshake className="feature-icon" />
              <h3>Collaborative Learning</h3>
              <p>We foster teamwork, peer learning, and real-world communication skills.</p>
            </div>
            <div className="approach-card fade-in-up delay-7">
              <FaRocket className="feature-icon" />
              <h3>Progressive Curriculum</h3>
              <p>Our programs are designed to grow with students, building skills and confidence step by step.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <p className="cta-text fade-in-up delay-8">
          Join TeachCraft today and experience education beyond the classroom—where learning English 
          becomes a journey of discovery, confidence, and lifelong skills.
        </p>
      </section>
    </div>
  );
}
