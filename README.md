# mingkong.ai

Personal website for Dr Ming Kong.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This project is configured as a static Next.js export for Cloudflare Pages. The production output is generated in `out/`.

## Cloudflare Pages settings

- Framework preset: Next.js or None
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Environment variable: none required

After the first successful Pages deployment, add `mingkong.ai` as a custom domain in the Cloudflare Pages project.
