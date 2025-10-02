import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // simple listener to force a re-render on resize so mobile/desktop show correctly
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="TeachCraft Logo" className="logo-img" />
          <span className="brand">TeachCraft</span>
        </NavLink>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/videos" onClick={() => setOpen(false)}>Videos</NavLink></li>
          <li><NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink></li>
          <li><NavLink to="/live" onClick={() => setOpen(false)}>Live</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
