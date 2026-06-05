# Laguna Premium Boxing Promotions — Demo

Single-page demo site for **Laguna Premium Boxing Promotions** (Panama City), the boxing promotion founded by former WBA world champion Anselmo "Chemito" Moreno.

> **Demo only.** Placeholder fighter names and silhouette art. No real fighter photos.

## Stack
- Vanilla HTML + CSS + JS (single `index.html`)
- GSAP 3 + ScrollTrigger for reveal animations
- Cloudflare Pages

## Features
- Hero with electric-blue pulse and animated grid
- 3-bout fight card with slide-in reveals
- Champion feature (Chemito Moreno)
- Sponsor placeholders with hover glow
- WhatsApp CTA
- **Bilingual ES / EN** — instant JS toggle, default Spanish
- `hreflang` tags + `_redirects` so `/es/` and `/en/` resolve to the right language
- Ley 81 (Panama) privacy notice

## Run locally
Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy to Cloudflare Pages
1. Push to GitHub.
2. In Cloudflare → Pages → **Create project → Connect to Git**, pick this repo.
3. Build command: *(none)* — Output directory: `/`.
4. Done.

## File layout
```
index.html     # Whole site
_headers       # Security + caching headers
_redirects     # /es/ + /en/ → ?lang=es|en
README.md
```
