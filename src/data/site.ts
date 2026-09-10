/**
 * Site-wide constants used for SEO / metadata.
 * `url` should match `site` in astro.config.mjs.
 */
export const site = {
  url: "https://stefano.dev",
  title: "Stefano Esarca",
  tagline: "Senior Backend & Cloud Engineer",
  description:
    "Stefano Esarca — Senior Backend & Cloud Engineer building cloud-native systems in .NET and Azure, and technical owner of a business-critical Java platform.",
  locale: "en",
  ogImage: "/og.png",
  themeColor: "#0b0b0f",
} as const;
