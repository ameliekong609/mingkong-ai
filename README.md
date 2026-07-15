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

This project is configured as a static Next.js export for Cloudflare Workers/Pages. The production output is generated in `out/`.

## Cloudflare Workers Git settings

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Project name: `mingkong-ai`
- Root directory: `/`
- Environment variable: `NODE_VERSION=22`

The `wrangler.jsonc` file tells Cloudflare to serve the static export from `out/`.

After the first successful deployment, add `mingkong.ai` as a custom domain in Cloudflare.
