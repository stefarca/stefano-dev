/**
 * Work history for the Experience timeline. Placeholder — replace with real roles.
 * Ordered most-recent first.
 */

export interface Job {
  role: string;
  org: string;
  /** e.g. "2022" */
  start: string;
  /** e.g. "Present" */
  end: string;
  summary: string;
}

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    org: "Northwind Labs",
    start: "2022",
    end: "Present",
    summary:
      "Lead engineer on the data platform: billing, metering, and the internal APIs the rest of the product builds on.",
  },
  {
    role: "Software Engineer",
    org: "Fathom Interactive",
    start: "2019",
    end: "2022",
    summary:
      "Shipped customer-facing features across a React front end and a Node/Postgres back end for a mid-size analytics product.",
  },
  {
    role: "Full-stack Developer",
    org: "Studio Ampersand",
    start: "2016",
    end: "2019",
    summary:
      "Agency work: built and maintained a dozen client sites and web apps, from CMS integrations to a small e-commerce platform.",
  },
];
