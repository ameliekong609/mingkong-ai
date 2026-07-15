import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = String.raw`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="${height}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F8FBFF"/>
      <stop offset="0.68" stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#FFFFFF"/>
    </linearGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M44 0H0V44" stroke="#2563EB" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="18" stdDeviation="26" flood-color="#CBD5E1" flood-opacity="0.55"/>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <g transform="translate(72 64)">
    <rect x="0" y="0" width="58" height="58" rx="10" fill="#FFFFFF" stroke="#CBD5E1"/>
    <text x="29" y="38" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#1D4ED8">MK</text>
    <text x="78" y="24" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#020617">Dr Ming Kong</text>
    <text x="78" y="52" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="500" fill="#64748B">Enterprise Applied AI | Agentic Systems | Controlled Digital Workers</text>
  </g>

  <g transform="translate(72 176)">
    <text font-family="Inter, Arial, sans-serif" font-size="70" font-weight="750" letter-spacing="-1" fill="#020617">
      <tspan x="0" y="0">Controlled digital workers</tspan>
      <tspan x="0" y="84">for enterprise AI.</tspan>
    </text>
    <rect x="0" y="207" width="4" height="96" rx="2" fill="#2563EB"/>
    <text x="28" y="229" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="500" fill="#1E293B">
      <tspan x="28" y="229">Designing systems that investigate, use evidence,</tspan>
      <tspan x="28" y="266">review and release work under human governance.</tspan>
    </text>
    <text x="0" y="368" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#1D4ED8">mingkong.ai</text>
  </g>

  <g transform="translate(820 226)" filter="url(#shadow)">
    <rect x="0" y="0" width="308" height="352" rx="18" fill="#FFFFFF" stroke="#D7E4F5"/>
    <text x="28" y="44" font-family="Inter, Arial, sans-serif" font-size="19" font-weight="700" fill="#020617">Controlled worker pattern</text>
    <text x="28" y="73" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="500" fill="#64748B">Delegate. Investigate. Review. Release.</text>

    <g transform="translate(28 112)">
      <rect x="0" y="0" width="252" height="42" rx="8" fill="#FFFFFF" stroke="#BFDBFE"/>
      <text x="18" y="27" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="650" fill="#020617">Delegated objective</text>
      <line x1="126" y1="42" x2="126" y2="58" stroke="#93C5FD" stroke-width="2"/>

      <rect x="0" y="58" width="252" height="42" rx="8" fill="#FFFFFF" stroke="#BFDBFE"/>
      <text x="18" y="85" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="650" fill="#020617">Investigate with tools</text>
      <line x1="126" y1="100" x2="126" y2="116" stroke="#93C5FD" stroke-width="2"/>

      <rect x="0" y="116" width="252" height="42" rx="8" fill="#FFFFFF" stroke="#BFDBFE"/>
      <text x="18" y="143" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="650" fill="#020617">Review and correct</text>
      <line x1="126" y1="158" x2="126" y2="174" stroke="#93C5FD" stroke-width="2"/>

      <rect x="0" y="174" width="252" height="42" rx="8" fill="#EFF6FF" stroke="#93C5FD"/>
      <text x="18" y="201" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="750" fill="#1D4ED8">Controlled release</text>
    </g>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile("public/og-image.png");

await sharp(Buffer.from(svg))
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/linkedin-card.jpg");

await writeFile("public/og-image.svg", svg);
