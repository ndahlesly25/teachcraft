import React from "react";
import { Helmet } from "react-helmet";

export default function MetaTags({
  title,
  description,
  image,
  url,
}) {
  const siteURL = "https://teachcraftco.netlify.app"; // Replace with your live site URL
  const defaultTitle = "TeachCraft – Learn English with Confidence";
  const defaultDescription =
    "TeachCraft is your trusted partner in nurturing the next generation of confident English speakers. Join us for interactive lessons, workshops, and fun-filled activities!";
  const defaultImage = `${siteURL}/images/social-cover.jpg`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteURL} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || siteURL} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
