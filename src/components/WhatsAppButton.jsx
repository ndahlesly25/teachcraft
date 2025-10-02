import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "66953926190"; // WhatsApp number without + or spaces
  const message = encodeURIComponent("Hello! I want to learn more about TeachCraft."); // pre-filled message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src="/images/whatsapp.png" alt="Chat on WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;

