# Isfar Anwardeen — HUTCH Enterprise Metal NFC Portfolio

Mobile-first one-page digital executive card and portfolio for **Mr. Isfar Anwardeen**, **General Manager - Enterprise & Postpaid** at **Hutchison Telecommunications Lanka (Pvt) Ltd.** (*A member of CK Hutchison Holdings*).

## Features

- **NFC-First Golden Zone:** Above-the-fold portrait, current role spotlight, one-tap **Save to Contacts (`.vcf`)** with embedded portrait photo, and direct Mobile / WhatsApp / Email / General Line / Office Map actions.
- **Interactive 3D Metal NFC Card Preview:** Pointer-reactive brushed-titanium card (`Powered by HUTCH Enterprise`) with flip-to-back QR view.
- **HUTCH Enterprise & Career Highlights:** Enterprise mandate pillars, concise 25+ year career timeline (Hutch Sri Lanka, Bharti Airtel Lanka, Rogers Communications Toronto, Lanka Bell), **CLA Great Manager Awards 2020** feature, and ICFAI MBA credentials.
- **Dark Titanium & Clean White Theme Toggle:** Automatically adapts branding between dark-theme and light-theme HUTCH Enterprise logos.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deploying to Vercel & Metal NFC Setup

1. Push this repository to GitHub (`M-Mufassir/isfar-anwardeen`).
2. Import the repository in **Vercel** (framework preset: **Vite**, build command: `npm run build`, output directory: `dist`).
3. [vercel.json](./vercel.json) configures `Content-Type: text/vcard; charset=utf-8` on `*.vcf` so iOS Safari and Android browsers open the native Add Contact sheet directly.
4. Encode your live Vercel URL (e.g., `https://isfar-anwardeen.vercel.app` or a custom domain) as an **NDEF URI** record onto the Metal NFC card.
