import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate sending message
    setSuccessMsg("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // TODO: Integrate with email service (EmailJS, Nodemailer, backend API)
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner fade-in">
        <div className="banner-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Send us a message below.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="contact-form-container fade-in-up">
        {successMsg && <p className="success-message">{successMsg}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
          />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="contact-map fade-in-up">
        <h2>Our Location</h2>
        <p>339/11 Grove Ville 2, Ban Krot, Ayutthaya, Thailand</p>
        <iframe
          title="TeachCraft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1234567890!2d100.123456!3d14.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTeachCraft!5e0!3m2!1sen!2sth!4v1696234567890!5m2!1sen!2sth"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
