/**
 * The toolbox, grouped. Placeholder — tweak to taste.
 */

export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Rust", "Go", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    items: ["Astro", "React", "Node.js", "Axum", "SvelteKit"],
  },
  {
    label: "Infrastructure",
    items: ["Postgres", "Redis", "Kafka", "Docker", "Cloudflare", "AWS"],
  },
  {
    label: "Tooling",
    items: ["Vite", "Playwright", "Grafana", "Terraform", "GitHub Actions"],
  },
];
