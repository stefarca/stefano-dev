/**
 * Generates public/og.png (1200×630) — the social share image.
 * Placeholder art: dot-grid + aurora + wordmark, matching the site.
 * Run with: npm run og
 *
 * Uses `sharp` (already present via Astro's image pipeline) to rasterize an SVG.
 * System fonts only, so the wordmark falls back to Ubuntu/DejaVu here; that's
 * fine for a placeholder. Replace public/og.png with a designed image anytime.
 */
import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const W = 1200;
const H = 630;
const ROLE = "Senior Backend & Cloud Engineer";
const DOMAIN = "stefano.dev";

const dots = [];
for (let y = 40; y < H; y += 40) {
  for (let x = 40; x < W; x += 40) {
    dots.push(`<circle cx="${x}" cy="${y}" r="1.6" />`);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22d3ee" />
      <stop offset="1" stop-color="#a78bfa" />
    </linearGradient>
    <radialGradient id="glowA" cx="18%" cy="12%" r="55%">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.45" />
      <stop offset="1" stop-color="#22d3ee" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowB" cx="86%" cy="6%" r="55%">
      <stop offset="0" stop-color="#a78bfa" stop-opacity="0.45" />
      <stop offset="1" stop-color="#a78bfa" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0b0b0f" />
  <rect width="${W}" height="${H}" fill="url(#glowA)" />
  <rect width="${W}" height="${H}" fill="url(#glowB)" />
  <g fill="#ffffff" fill-opacity="0.05">${dots.join("")}</g>
  <rect width="${W}" height="${H}" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="2" />

  <text x="80" y="150" font-family="Ubuntu, 'DejaVu Sans', sans-serif" font-size="26" letter-spacing="6" fill="#9aa0aa">${ROLE.toUpperCase().replace(/&/g, "&amp;")}</text>

  <text x="76" y="360" font-family="Ubuntu, 'DejaVu Sans', sans-serif" font-weight="700" font-size="150" letter-spacing="-4" fill="#e7e7ea">Stefano</text>
  <text x="76" y="500" font-family="Ubuntu, 'DejaVu Sans', sans-serif" font-weight="700" font-size="150" letter-spacing="-4" fill="url(#accent)">Esarca</text>

  <text x="80" y="575" font-family="'DejaVu Sans Mono', monospace" font-size="24" letter-spacing="2" fill="#6c7079">${DOMAIN}</text>
  <circle cx="1104" cy="548" r="28" fill="url(#accent)" />
</svg>`;

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));
const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(out, png);
console.log(`Wrote ${out} (${(png.length / 1024).toFixed(1)} kB)`);
