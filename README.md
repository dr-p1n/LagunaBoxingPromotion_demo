# Laguna Premium Boxing Promotions — Demo

Multi-page demo site for **Laguna Premium Boxing Promotions** (Panama City), the boxing promotion founded by former WBA world champion Anselmo "Chemito" Moreno.

> **Demo only.** Placeholder fighter names and stock B&W imagery. No real fighter photos. Brands shown for illustration only.

## Stack
- Vanilla HTML + CSS + JS, shared assets (`/assets/styles.css`, `/assets/app.js`)
- GSAP 3 + ScrollTrigger for reveal animations
- Cloudflare Pages

## Pages
- `/` — hero, próxima velada **Noche Eléctrica** (next-event badge, live countdown, EN VIVO broadcast bar, fight card), Explore links, medios, sponsors + casas de apuestas, contacto
- `/circuito/` — **Circuito Nacional de Boxeo**, Mola (Guna) art direction
- `/campeones/` — **Anselmo "Chemito" Moreno**
- `/archivo/` — **Carteleras anteriores** (demo past events)

## Features
- **Bilingual ES / EN** — instant JS toggle (default Spanish), persisted in localStorage across pages
- Per-page SEO: unique `<title>` / description / canonical / `hreflang` / Open Graph + **JSON-LD** (SportsOrganization, Person, SportsEvent, ItemList)
- `sitemap.xml`, `robots.txt`, `_redirects` (`/es/*` + `/en/*` → `?lang=`)
- Responsive nav with mobile menu + footer sitemap
- `translate="no"` guards on proper nouns (brand, Chemito, fighters) to stop browser auto-translation mangling
- Ley 81 (Panama) privacy notice + responsible-gaming notice

## Run locally
```bash
python3 -m http.server 4178
# open http://localhost:4178/
```
(Clean URLs like `/circuito/` need a static server that serves directory `index.html`.)

## Deploy to Cloudflare Pages
1. Push to GitHub.
2. Cloudflare → Pages → **Create project → Connect to Git**, pick this repo.
3. Build command: *(none)* — Output directory: `/`.

## File layout
```
index.html            # Home
circuito/index.html   # Circuito Nacional (mola)
campeones/index.html  # Chemito Moreno
archivo/index.html    # Past fight cards
assets/styles.css     # Shared styles
assets/app.js         # Shared i18n + nav + countdown + GSAP
_headers              # Security + caching headers
_redirects            # /es/* + /en/* → ?lang=
sitemap.xml  robots.txt
```
