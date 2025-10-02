import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookiePopup from "./components/CookiePopup";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Booking from "./pages/Booking";
import Live from "./pages/Live";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookiePopup />
    </div>
  );
}
