# ACOB Links Hub

A standalone Next.js link hub matching the ACOB website's paper/forest-green/terracotta visual system. Uses the same Fraunces, Inter, and IBM Plex Mono fonts as the main ACOB project and the existing black ACOB logo.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` and `npm start`.

## Social links

All link destinations are defined in `src/app/page.tsx` in the `links` array. Update them there if the official destinations change. The current links are the website, Facebook, Instagram, YouTube, LinkedIn, Olympiads, resources, and ambassador opportunities.

## Deploy to `links.theacob.com`

1. Push this folder as a separate GitHub repository.
2. Import that repository into Vercel and deploy with the default Next.js settings.
3. In Vercel project Settings → Domains, add `links.theacob.com`.
4. In your DNS provider, add the exact CNAME/A record Vercel shows for that subdomain. Do not change the DNS records for the main `theacob.com` site.
5. Wait for Vercel to verify the subdomain and issue HTTPS.

This project is intentionally standalone: no database, authentication, or API routes are required.
