import React from "react";
import { Helmet } from "react-helmet";

export default function MetaTags() {
  const siteURL = "https://teachcraftco.netlify.app"; // Replace with your live site URL
  const siteTitle = "TeachCraft – Learn English with Confidence";
  const siteDescription =
    "TeachCraft is your trusted partner in nurturing the next generation of confident English speakers. Join us for interactive lessons, workshops, and fun-filled activities!";
  const socialImage = `${siteURL}/images/social-cover.jpg`; // Full URL to your image

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteURL} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={socialImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteURL} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
}
