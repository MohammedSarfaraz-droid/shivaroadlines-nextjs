# MIGRATION CHECKLIST — SHIVA ROAD LINES

## 1. Page Inventory & Migration Status

| Original File | Intended Next.js Route | Page Purpose | Key Assets / Dependencies | Status |
|---|---|---|---|---|
| `index.html` | `/` (and redirects for `/index.html`) | Homepage with Hero carousel, Intro, Services overview, About preview, Testimonials, Contact banner | `hero-3.webp`, `hero-4.webp`, `lube-oil.webp`, `coal-tar.webp`, `ethanol-oil.webp`, `all-petrolium.webp`, `hero-2.webp`, `avatar.webp`, `hero-5.webp`, `logo2.webp` | **Verified (200 OK)** |
| `about.html` | `/about` (and redirects for `/about.html`) | Company Profile, Leadership & Legacy, Vision, Mission, Company History | `hero-1.webp`, `logo2.webp` | **Verified (200 OK)** |
| `services.html` | `/services` (and redirects for `/services.html`) | Comprehensive Services overview (Lube Oil, Coal Tar, Ethanol, Other Services list) | `lube-oil.webp`, `coal-tar.webp`, `ethanol-oil.webp`, `all-petrolium.webp`, `logo2.webp` | **Verified (200 OK)** |
| `coal-tar-transportation.html` | `/coal-tar-transportation` (and redirect) | Detailed Coal Tar Transportation Service Page | `coal-tar.webp`, `logo2.webp` | **Verified (200 OK)** |
| `ethanol-transportation.html` | `/ethanol-transportation` (and redirect) | Detailed Ethanol Transportation Service Page | `ethanol-oil.webp`, `logo2.webp` | **Verified (200 OK)** |
| `lube-oil-transportation.html` | `/lube-oil-transportation` (and redirect) | Detailed Lube Oil Transportation Service Page | `lube-oil.webp`, `logo2.webp` | **Verified (200 OK)** |
| `other-services.html` | `/other-services` (and redirect) | Other Services & Products (LSHS, Bitumen, Base Oil, Naphtha, MTO, etc.) | `all-petrolium.webp`, `logo2.webp` | **Verified (200 OK)** |
| `clients.html` | `/clients` (and redirects for `/clients.html`) | Clients showcase with 12 client logos and IOCL/HPCL/BPCL accreditation | `client-1.webp` through `client-12.webp`, `logo2.webp` | **Verified (200 OK)** |
| `contact.html` | `/contact` (and redirects for `/contact.html`) | Contact & Office Directory (Head Office Navi Mumbai, Operational Offices, International Office) | `logo2.webp` | **Verified (200 OK)** |

---

## 2. Global Components & Layout

- [x] Header / Topbar (`SiteHeader`, `SiteTopbar`) with contact numbers, email, social links
- [x] Responsive Desktop & Mobile Navigation with slide-out mobile drawer
- [x] Dropdown menu for Services (`/services`, `/lube-oil-transportation`, `/coal-tar-transportation`, `/ethanol-transportation`, `/other-services`)
- [x] Sticky Header on scroll (`.sticky-header`)
- [x] Floating WhatsApp Button with responsive icon/text (`.whatsapp-float`)
- [x] Marquee / Scrolling ticker banner
- [x] Promo banners with brand gradient (`.gradientbg`, `.gradientbg2`)
- [x] Footer (`SiteFooter`) with company bio, quick links, head office, operational offices, copyright, legal disclaimer (GSTIN: 27AMAPR6367F2ZS, Proprietor: A. Rai)

---

## 3. SEO & Technical Audit

- [x] Exact page titles & meta descriptions preserved
- [x] Canonical URLs set using `https://www.shivaroadlines.co.in`
- [x] JSON-LD LocalBusiness structured data preserved with GSTIN `27AMAPR6367F2ZS`
- [x] Semantic HTML headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`)
- [x] Robots.txt (`src/app/robots.ts` -> `/robots.txt`)
- [x] Sitemap (`src/app/sitemap.ts` -> `/sitemap.xml`)
- [x] Legacy `.html` permanent redirects in `next.config.ts` (tested: `/about.html` -> 308 redirect to `/about`)

---

## 4. Verification & QA

- [x] Production build succeeds without errors (`npm run build` -> Exit code 0, 14 static pages generated)
- [x] TypeScript strict mode passes (finished in 3.9s with 0 errors)
- [x] ESLint passes (`npx eslint src` -> Exit code 0, 0 errors, 0 warnings)
- [x] Assets verified (all 26 image files copied and accessible in `public/images/`)
- [x] Mobile responsive layout tested across screen sizes
- [x] Cross-browser interactive features verified (mobile menu, dropdowns, hero carousel, testimonials slider, tel/mailto/whatsapp links)
