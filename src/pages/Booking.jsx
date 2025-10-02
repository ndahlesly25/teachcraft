import React, { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    session: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show confirmation
    setSubmitted(true);
    // Optionally, reset form
    setFormData({ name: "", email: "", date: "", session: "", message: "" });
    // Hide confirmation after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="booking-page">
      <div className="booking-banner">
        <h1>Book Your Session</h1>
        <p>Reserve your place in TeachCraft programs</p>
      </div>

      <section className="booking-form-section">
        {submitted && <div className="confirmation">Your booking has been submitted successfully!</div>}

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="session"
            value={formData.session}
            onChange={handleChange}
            required
          >
            <option value="">Select Session</option>
            <option value="morning">Morning Session</option>
            <option value="afternoon">Afternoon Session</option>
          </select>
          <textarea
            name="message"
            placeholder="Additional Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Book Now</button>
        </form>
      </section>
    </div>
  );
}
