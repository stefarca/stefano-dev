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
  role: "Senior Backend & Cloud Engineer",
  location: "Godega di Sant'Urbano (TV), Italy",
  pitch:
    "I design and build cloud-native backends in .NET and Azure — event-driven systems taken solo from requirements analysis to production.",
  about: [
    "For nearly nine years I've been the technical reference point for a multinational industrial group, working across two divisions and two technology stacks. I design and build cloud-native backends in .NET and Azure, and I'm the technical owner of a business-critical Java application used every day around the world.",
    "More than six systems I've delivered single-handedly, from requirements analysis through to production release, with no intermediary between me and the client. I run the analysis directly with the client's service business leads in Sweden, define the technical solution, and guide the other developers through code review and hands-on support.",
    "I care about event-driven architecture that stays observable under load, legacy integrations that don't break, on-prem-to-cloud migrations with no downtime, and test coverage on code that never had any. Currently working with .NET 10, Azure Container Apps, Service Bus and Redis.",
  ],
  now: [
    "Tech lead and technical owner across two stacks at Job Informatica, primary account Electrolux",
    "Running a .NET / Azure telemetry alerting engine in production — 1,000+ events per minute from ~30 production lines",
    "Looking for a role with more architectural responsibility at a product company — remote or on-site in Veneto",
  ],
  email: "stefano.esarca@outlook.com",
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
      handle: "in/esarcastefano",
      href: "https://www.linkedin.com/in/esarcastefano/",
    },
    {
      label: "Email",
      handle: "stefano.esarca@outlook.com",
      href: "mailto:stefano.esarca@outlook.com",
    },
  ],
};
