import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setSuccessMsg("Thank you! You are subscribed.");
    setEmail("");
    // TODO: Integrate with newsletter service
  };

  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Contact Section */}
        <div className="contact">
          <h3>Contact Us</h3>
          <p><strong>Location:</strong> 339/11 Grove Ville 2, Ban Krot, Ayutthaya, Thailand</p>
          <p><strong>Mobile:</strong> <a href="tel:+66953926190">+66 95 392 6190</a></p>
          <p><strong>Email:</strong> <a href="mailto:eelcth@gmail.com">eelcth@gmail.com</a></p>
        </div>

        {/* Social Section */}
        <div className="social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/share/19xtJEVzYi/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedinIn /> LinkedIn
          </a>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          {successMsg && <p className="success-message">{successMsg}</p>}
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} TeachCraft Co.Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
