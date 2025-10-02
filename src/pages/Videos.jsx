import React, { useState } from "react";
import "./Videos.css";

const videos = [
  { src: "/videos/video1.mp4", title: "English Lesson 1" },
  { src: "/videos/video2.mp4", title: "English Lesson 2" },
  { src: "/videos/video3.mp4", title: "Workshop Highlights" },
  { src: "/videos/video4.mp4", title: "Student Presentations" },
  { src: "/videos/video5.mp4", title: "Teacher Training" },
  { src: "/videos/video6.mp4", title: "Creative Activities" },
];

export default function Videos() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", title: "" });
  const [closing, setClosing] = useState(false);

  const openLightbox = (src, title) => {
    setLightbox({ open: true, src, title });
    setClosing(false);
  };

  const closeLightbox = () => {
    setClosing(true);
    setTimeout(() => {
      setLightbox({ open: false, src: "", title: "" });
      setClosing(false);
    }, 400); // match animation duration
  };

  return (
    <div className="videos-page">
      {/* Banner */}
      <div className="videos-banner">
        <h1>Videos</h1>
        <p>Watch TeachCraft in action through our engaging video content</p>
      </div>

      {/* Intro */}
      <section className="videos-intro">
        <p>
          Explore our videos to experience live classes, workshops, and student
          activities that bring learning English to life.
        </p>
      </section>

      {/* Grid */}
      <section className="videos-section">
        <div className="videos-grid">
          {videos.map((vid, index) => (
            <div
              key={index}
              className="video-card"
              onClick={() => openLightbox(vid.src, vid.title)}
            >
              <video src={vid.src} muted playsInline />
              <div className="video-title">{vid.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className={`video-lightbox ${closing ? "closing" : ""}`}
          onClick={closeLightbox}
        >
          <span className="close">&times;</span>
          <video src={lightbox.src} controls autoPlay />
          <div className="lightbox-title">{lightbox.title}</div>
        </div>
      )}
    </div>
  );
}
