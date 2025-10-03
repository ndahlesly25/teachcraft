import React, { useState } from "react";
import "./EnglishCamps.css";

// Photos (replace paths with your actual images)
const campImages = [
  { src: "/images/camps1.jpg", title: "Camp Fun" },
  { src: "/images/camps2.jpg", title: "Interactive Lessons" },
  { src: "/images/camps3.jpg", title: "Outdoor Learning" },
  { src: "/images/camps4.jpg", title: "Team Activities" },
  { src: "/images/camps5.jpg", title: "Creative Projects" },
  { src: "/images/camps6.jpg", title: "Creative Projects" },
  { src: "/images/camps7.jpg", title: "Creative Projects" },
  { src: "/images/camps8.jpg", title: "Creative Projects" },
  { src: "/images/camps9.jpg", title: "Creative Projects" },
  { src: "/images/camps10.jpg", title: "Creative Projects" },
  { src: "/images/camps11.jpg", title: "Creative Projects" },
  { src: "/images/camps12.jpg", title: "Creative Projects" },
  { src: "/images/camps13.jpg", title: "Creative Projects" },
  { src: "/images/camps14.jpg", title: "Creative Projects" },
  { src: "/images/camps15.jpg", title: "Creative Projects" },
  { src: "/images/camps16.jpg", title: "Creative Projects" },
  { src: "/images/camps17.jpg", title: "Creative Projects" },
  { src: "/images/camps18.jpg", title: "Creative Projects" },
  { src: "/images/camps19.jpg", title: "Creative Projects" },
  { src: "/images/camps20.jpg", title: "Creative Projects" },
  { src: "/images/camps21.jpg", title: "Creative Projects" },
  { src: "/images/camps22.jpg", title: "Creative Projects" },
  { src: "/images/camps23.jpg", title: "Creative Projects" },
  { src: "/images/camps24.jpg", title: "Creative Projects" },
  { src: "/images/camps25.jpg", title: "Creative Projects" },
  { src: "/images/camps26.jpg", title: "Creative Projects" },
  { src: "/images/camps27.jpg", title: "Creative Projects" },
  { src: "/images/camps28.jpg", title: "Creative Projects" },
  { src: "/images/camps29.jpg", title: "Creative Projects" },
  //{ src: "/images/camps.jpg", title: "Creative Projects" },
  //{ src: "/images/camps.jpg", title: "Creative Projects" },
  //{ src: "/images/camps.jpg", title: "Creative Projects" },
  //{ src: "/images/camps.jpg", title: "Creative Projects" },
  //{ src: "/images/camps.jpg", title: "Creative Projects" },
  // add more images as needed
];

// Videos (local video in public/videos)
const campVideos = [
  { src: "/videos/campvideo1.mp4", title: "Workshop" },
  // add more local videos here
];

export default function EnglishCamps() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0, type: "photo" });
  const [activeTab, setActiveTab] = useState("photos"); // 'photos' or 'videos'

  const openLightbox = (index, type) => setLightbox({ open: true, index, type });
  const closeLightbox = () => setLightbox({ open: false, index: 0, type: "photo" });
  const prevItem = (e) => {
    e.stopPropagation();
    if (lightbox.type === "photo") {
      setLightbox((prev) => ({
        ...prev,
        index: (prev.index - 1 + campImages.length) % campImages.length,
      }));
    } else {
      setLightbox((prev) => ({
        ...prev,
        index: (prev.index - 1 + campVideos.length) % campVideos.length,
      }));
    }
  };
  const nextItem = (e) => {
    e.stopPropagation();
    if (lightbox.type === "photo") {
      setLightbox((prev) => ({
        ...prev,
        index: (prev.index + 1) % campImages.length,
      }));
    } else {
      setLightbox((prev) => ({
        ...prev,
        index: (prev.index + 1) % campVideos.length,
      }));
    }
  };

  return (
    <div className="english-camps-page">
      {/* Banner */}
      <div className="english-camps-banner">
        <h1>English Camps</h1>
        <p>Immersive camps where learning English meets fun, teamwork, and adventure!</p>
      </div>

      {/* Toggle Buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === "photos" ? "active" : ""}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={activeTab === "videos" ? "active" : ""}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {/* Photos Section */}
      {activeTab === "photos" && (
        <section className="english-camps-intro">
          <h2>Photo Highlights</h2>
          <p>Explore memories from our past English Camps.</p>
          <div className="grid">
            {campImages.map((img, idx) => (
              <div
                key={idx}
                className="grid-card"
                data-title={img.title}
                onClick={() => openLightbox(idx, "photo")}
                style={{ "--delay": `${0.2 + idx * 0.05}s` }}
              >
                <img src={img.src} alt={img.title} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Videos Section */}
      {activeTab === "videos" && (
        <section className="english-camps-videos">
          <h2>Camp Videos</h2>
          <p>Relive the experience with highlights from our events.</p>
          <div className="video-grid">
            {campVideos.map((vid, idx) => (
              <div
  key={idx}
  className="video-card"
  onClick={() => openLightbox(idx, "video")}
>
  <video>
    <source src={vid.src} type="video/mp4" />
  </video>
  <div className="play-overlay">
    <span>&#9658;</span>
  </div>
  <p>{vid.title}</p>
</div>

            ))}
          </div>
        </section>
      )}

      {/* Lightbox for Photos & Videos */}
      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>&times;</span>
          <span className="nav prev" onClick={prevItem}>&#10094;</span>

          {lightbox.type === "photo" ? (
            <img src={campImages[lightbox.index].src} alt={campImages[lightbox.index].title} />
          ) : (
            <video controls autoPlay>
              <source src={campVideos[lightbox.index].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <div className="lightbox-title">
            {lightbox.type === "photo"
              ? campImages[lightbox.index].title
              : campVideos[lightbox.index].title}
          </div>
          <span className="nav next" onClick={nextItem}>&#10095;</span>
        </div>
      )}
    </div>
  );
}