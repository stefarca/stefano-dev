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
    role: "Senior Backend & Cloud Engineer",
    org: "Job Informatica",
    start: "2017",
    end: "Present",
    summary:
      "Technical reference point for a global appliance manufacturer (Electrolux) across two divisions and two technology stacks. Joined as a developer on assigned projects; scope grew to requirements analysis run directly with the client's service business leads in Sweden, autonomous architecture on owned projects, and code review and guidance for 2–3 developers. More than six systems delivered single-handedly from analysis to production; introduced Azure DevOps CI/CD, moving releases from once every 3–4 weeks to weekly per application.",
  },
];
