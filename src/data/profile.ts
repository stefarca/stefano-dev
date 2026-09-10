/**
 * Everything about the person. Placeholder content — swap in real details.
 * Components read from here so copy changes never touch markup.
 */

export interface SocialLink {
  label: string;
  /** short handle shown in the UI, e.g. "@stefarca" */
  handle: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  /** one-line pitch for the hero */
  pitch: string;
  /** short bio paragraphs for the About section */
  about: string[];
  /** "currently" bullet list */
  now: string[];
  email: string;
  /** path (in /public) or URL to a CV/résumé, or null to hide the link */
  resume: string | null;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Stefano Esarca",
  role: "Software engineer",
  location: "Turin, Italy",
  pitch:
    "I build reliable backend systems and the calm, precise interfaces that sit on top of them.",
  about: [
    "I'm a software engineer with around a decade of experience taking products from a whiteboard sketch to something people depend on every day. Most of my work lives in the space between a well-modelled database and an interface that feels effortless.",
    "I care about the parts users never see: clear data models, honest error handling, tests that fail for the right reasons, and deploys that are boring on purpose. Lately that has meant a lot of TypeScript and Rust, Postgres, and running things at the edge.",
    "Outside of work I tinker with generative art, fold too many paper cranes, and maintain a couple of small open-source tools.",
  ],
  now: [
    "Building a usage-metering pipeline for a SaaS platform",
    "Learning shader programming, badly and happily",
    "Open to interesting freelance and full-time work",
  ],
  email: "hello@stefano.dev",
  // Drop a PDF in /public and set this to e.g. "/stefano-esarca-cv.pdf".
  // Left null so the résumé button stays hidden until the file exists.
  resume: null,
  socials: [
    {
      label: "GitHub",
      handle: "@stefarca",
      href: "https://github.com/stefarca",
    },
    {
      label: "LinkedIn",
      handle: "in/stefano-esarca",
      href: "https://www.linkedin.com/in/stefano-esarca/",
    },
    {
      label: "Email",
      handle: "hello@stefano.dev",
      href: "mailto:hello@stefano.dev",
    },
  ],
};
