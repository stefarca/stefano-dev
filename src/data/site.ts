/**
 * Site-wide constants used for SEO / metadata.
 * `url` should match `site` in astro.config.mjs.
 */
export const site = {
  url: "https://stefano.dev",
  title: "Stefano Esarca",
  tagline: "Software engineer",
  description:
    "Stefano Esarca — software engineer building reliable backends and thoughtful interfaces for the web.",
  locale: "en",
  ogImage: "/og.png",
  themeColor: "#0b0b0f",
} as const;
