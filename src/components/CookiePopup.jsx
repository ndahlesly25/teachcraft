import React, { useState, useEffect } from "react";
import "./CookiePopup.css";

export default function CookiePopup() {
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const a = localStorage.getItem("tc_accept_cookies");
    setAccepted(Boolean(a));
  }, []);

  const accept = () => {
    localStorage.setItem("tc_accept_cookies", "1");
    setAccepted(true);
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (accepted) return null;

  return (
    <>
      {/* Floating Cookie Bar */}
      <div className="cookie-popup">
        <p>
          This website uses cookies to ensure you get the best experience.
        </p>
        <button className="learn-more" onClick={openModal}>
          Learn More
        </button>
        <button className="accept-btn" onClick={accept}>
          Accept Cookies
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="cookie-modal" onClick={closeModal}>
          <div className="cookie-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Cookies & Terms of Use</h2>
            <p>
              At TeachCraft, we value your privacy and strive to provide the best experience. 
              This website uses cookies and similar technologies to enhance navigation, analyze site usage, 
              and provide personalized content.
            </p>
            <h3>What We Use Cookies For:</h3>
            <ul>
              <li>Improving website performance and speed.</li>
              <li>Remembering your preferences and settings.</li>
              <li>Analyzing user activity to enhance learning experiences.</li>
              <li>Providing personalized content and suggestions.</li>
            </ul>
            <h3>Your Choices:</h3>
            <ul>
              <li>You can accept all cookies to enjoy the full experience.</li>
              <li>You can decline non-essential cookies, but some features may be limited.</li>
            </ul>
            <h3>About Our Site:</h3>
            <ul>
              <li>Interactive English lessons and workshops.</li>
              <li>Video and gallery content showcasing learning experiences.</li>
              <li>Live classes via Zoom for real-time learning.</li>
              <li>Easy-to-use online portal for schedules, sessions, and resources.</li>
            </ul>
            <button className="accept-btn" onClick={accept}>
              Accept Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
}
