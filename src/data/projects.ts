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
    title: "Meterphase",
    period: "2025",
    blurb:
      "A usage-metering and billing engine that turns raw event streams into invoices.",
    detail:
      "Designed the ingestion pipeline and aggregation model, cutting end-of-month billing runs from hours to seconds while keeping every number auditable back to the source event.",
    tags: ["Rust", "Postgres", "Kafka", "gRPC"],
    links: [
      { label: "Case study", href: "#" },
      { label: "Source", href: "https://github.com/stefarca" },
    ],
    featured: true,
  },
  {
    title: "Halflight",
    period: "2024",
    blurb:
      "An open-source status-page generator that builds from a single YAML file.",
    detail:
      "Built the static generator and incident timeline. Ships as a 40 kB page with no runtime JavaScript and deploys to any static host in one command.",
    tags: ["TypeScript", "Astro", "Cloudflare", "SVG"],
    links: [
      { label: "Live demo", href: "#" },
      { label: "Source", href: "https://github.com/stefarca" },
    ],
    featured: true,
  },
  {
    title: "Cranefold",
    period: "2023",
    blurb:
      "A generative-art experiment that grows origami crease patterns in the browser.",
    detail:
      "A weekend project that got out of hand: a constraint solver for flat-foldability rendered on canvas, with exports you can actually print and fold.",
    tags: ["Canvas", "WebGL", "Geometry"],
    links: [{ label: "Play", href: "#" }],
    featured: true,
  },
];
