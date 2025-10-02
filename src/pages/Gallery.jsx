import React, { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "/images/gallery1.jpg", title: "English Camp Fun" },
  { src: "/images/gallery2.jpg", title: "Interactive Lessons" },
  { src: "/images/gallery3.jpg", title: "Teacher Training" },
  { src: "/images/gallery4.jpg", title: "Global Connections" },
  { src: "/images/gallery5.jpg", title: "Student Projects" },
  { src: "/images/gallery6.jpg", title: "Outdoor Learning" },
  { src: "/images/gallery7.jpg", title: "Language Games" },
  { src: "/images/gallery8.jpg", title: "Celebrations" },
  { src: "/images/gallery9.jpg", title: "Workshops" },
  { src: "/images/gallery10.jpg", title: "Graduation Day" },
  { src: "/images/gallery11.jpg", title: "Creative Activities" },
  { src: "/images/gallery12.jpg", title: "Collaboration" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const openLightbox = (index) => {
    setLightbox({ open: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + images.length) % images.length,
    }));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % images.length,
    }));
  };

  return (
    <div className="gallery-page">
      {/* Full-width Banner */}
      <div className="gallery-banner">
        <h1>Gallery</h1>
        <p>Capturing moments and experiences at TeachCraft</p>
      </div>

      {/* Intro Text */}
      <section className="gallery-intro">
        <p>
          Explore our gallery to see the vibrant learning experiences,
          interactive workshops, and fun-filled activities that make TeachCraft
          special.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {images.map((imgObj, index) => (
            <div
              key={index}
              className="gallery-card"
              data-title={imgObj.title}
              onClick={() => openLightbox(index)}
            >
              <img src={imgObj.src} alt={imgObj.title} />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <span className="nav prev" onClick={prevImage}>
            &#10094;
          </span>
          <img
            src={images[lightbox.index].src}
            alt={images[lightbox.index].title}
          />
          <div className="lightbox-title">{images[lightbox.index].title}</div>
          <span className="nav next" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
}
