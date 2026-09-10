/**
 * Selected work. Placeholder projects — replace with real ones.
 * `featured` controls whether a card shows on the single-page site.
 */

export interface Project {
  title: string;
  /** e.g. "2025" or "2023 — 2024" */
  period: string;
  /** one-sentence description */
  blurb: string;
  /** what you actually did / the outcome */
  detail: string;
  tags: string[];
  links: { label: string; href: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Industrial Telemetry Alerting Engine",
    period: "2024 · ~4 months",
    blurb:
      "Full replacement of a legacy on-prem alerting system that could no longer handle the volume.",
    detail:
      "Designed and built entirely solo, from scratch to production in about four months. Processes over 1,000 events per minute from around 30 production lines via Azure Service Bus, with 100–200 ms from ingestion to notification and Redis holding application state at low latency under load. Plant managers configure alert conditions, notification channel and delay per rule; shop-floor operators are notified via web push and Wear OS smartwatches, so they can act on the line without returning to a workstation.",
    tags: [".NET", "Azure Service Bus", "Redis", "Container Apps"],
    links: [],
    featured: true,
  },
  {
    title: "Global Service Management Platform",
    period: "2017 — present · technical owner",
    blurb:
      "Business-critical web application covering the full lifecycle of installed machines, used worldwide.",
    detail:
      "Technical owner of a system spanning installation, maintenance contracts, field service, spare parts, quotes and decommissioning, feeding the downstream billing system — over a thousand uses per day. Started with two developers and a manager acting as intermediary; today I'm the sole technical point of reference, with the business reaching out directly. Migrated the legacy codebase from Java 6 to Java 11 with no service interruption, across nine years of continuous evolution.",
    tags: ["Java 11", "Struts", "DB2"],
    links: [],
    featured: true,
  },
  {
    title: "CI/CD on Azure DevOps",
    period: "Ongoing",
    blurb:
      "Introduced pipelines that took releases from one every 3–4 weeks to one per week per application.",
    detail:
      "Built and now manage 6–7 Azure DevOps pipelines. Brought test coverage up to around 80% on codebases that previously had none, with xUnit, Moq and Testcontainers, plus Serilog, OpenTelemetry and Dynatrace for observability.",
    tags: ["Azure DevOps", "xUnit", "Testcontainers", "OpenTelemetry"],
    links: [],
    featured: true,
  },
];
