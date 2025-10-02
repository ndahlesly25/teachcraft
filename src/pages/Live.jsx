import React, { useState, useEffect } from "react";
import "./Live.css";

const defaultSessions = [
  {
    title: "English for Beginners",
    date: "Oct 27, 2025",
    time: "5:00 PM",
    link: "https://zoom.us/j/1234567890",
    type: "join",
  },
  {
    title: "Advanced Grammar Workshop",
    date: "Oct 30, 2025",
    time: "4:00 PM",
    link: "https://zoom.us/j/0987654321",
    type: "notify",
  },
];

const Live = () => {
  const [sessions, setSessions] = useState(defaultSessions);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    link: "",
  });
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [userSignedUp, setUserSignedUp] = useState([]);

  // Load notifications and user signed-up sessions from localStorage
  useEffect(() => {
    const savedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    const savedUserSignedUp = JSON.parse(localStorage.getItem("userSignedUp")) || [];
    setNotifications(savedNotifications);
    setUserSignedUp(savedUserSignedUp);
  }, []);

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  // Save user signed-up sessions to localStorage
  useEffect(() => {
    localStorage.setItem("userSignedUp", JSON.stringify(userSignedUp));
  }, [userSignedUp]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddSession = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.link) {
      alert("Please fill in all fields");
      return;
    }
    setSessions([...sessions, { ...formData, type: "join" }]);
    setFormData({ title: "", date: "", time: "", link: "" });
  };

  const handleNotify = (e, sessionTitle) => {
    e.preventDefault();
    if (!notifyEmail) {
      setNotifyMessage("Please enter your email first.");
      return;
    }

    if (userSignedUp.includes(sessionTitle)) {
      setNotifyMessage(`You already signed up for "${sessionTitle}"`);
      setTimeout(() => setNotifyMessage(""), 3000);
      return;
    }

    const newNotification = { session: sessionTitle, email: notifyEmail };
    setNotifications([...notifications, newNotification]);
    setUserSignedUp([...userSignedUp, sessionTitle]);
    setNotifyMessage(`You will be notified for "${sessionTitle}" at ${notifyEmail}`);
    setNotifyEmail("");
    setTimeout(() => setNotifyMessage(""), 5000);
  };

  return (
    <div className="live-page">
      {/* Banner */}
      <section className="live-banner">
        <div className="banner-content">
          <h1 className="fade-in-text delay-1">Join Us Live</h1>
          <p className="fade-in-text delay-2">Interactive Classes & Streaming Sessions</p>
        </div>
      </section>

      {/* Upcoming Live Sessions */}
      <section className="upcoming-sessions">
        <h2 className="fade-in-up delay-1">Upcoming Live Sessions</h2>
        <div className="session-grid">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`session-card fade-in-up`}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <h3>{session.title}</h3>
              <p>📅 {session.date} – ⏰ {session.time}</p>
              {session.type === "join" ? (
                <a href={session.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn">Join Live</button>
                </a>
              ) : (
                <form
                  className="notify-form"
                  onSubmit={(e) => handleNotify(e, session.title)}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    required
                    disabled={userSignedUp.includes(session.title)}
                  />
                  <button
                    type="submit"
                    className={`btn small-btn ${userSignedUp.includes(session.title) ? "signed-up" : ""}`}
                    disabled={userSignedUp.includes(session.title)}
                  >
                    {userSignedUp.includes(session.title) ? "Signed Up" : "Notify Me"}
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>

        {notifyMessage && <div className="notification fade-in-up">{notifyMessage}</div>}

        {/* Schedule My Meeting Form */}
        <div className="schedule-form fade-in-up delay-2">
          <h2>Schedule Your Zoom Meeting</h2>
          <form onSubmit={handleAddSession}>
            <input
              type="text"
              name="title"
              placeholder="Meeting Title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <input
              type="url"
              name="link"
              placeholder="Zoom Meeting Link"
              value={formData.link}
              onChange={handleChange}
            />
            <button type="submit" className="btn">Add My Meeting</button>
          </form>
        </div>
      </section>

      {/* Embedded Live Stream */}
      <section className="live-stream fade-in-up delay-3">
        <h2>Now Streaming</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/chgVy0soSJk"
            title="How to use Would and Want"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Admin Notifications */}
      {notifications.length > 0 && (
        <section className="notification-list fade-in-up delay-4">
          <h2>Admin Panel: Notification Emails</h2>
          <ul>
            {notifications.map((note, idx) => (
              <li key={idx}>
                <b>{note.session}</b> → {note.email}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Live;
