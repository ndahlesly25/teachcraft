import React, { useState, useEffect } from "react";

export default function CookiePopup() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const a = localStorage.getItem("tc_accept_cookies");
    setAccepted(Boolean(a));
  }, []);

  function accept() {
    localStorage.setItem("tc_accept_cookies", "1");
    setAccepted(true);
  }

  if (accepted) return null;

  return (
    <div className="cookie-popup">
      <p>
        This website uses cookies to ensure you get the best experience. <a href="#privacy-policy">Learn more</a>.
      </p>
      <button onClick={accept}>Accept Cookies</button>
    </div>
  );
}
