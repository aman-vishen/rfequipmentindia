# RF Equipment India — Next.js Website

The RF Equipment website has been migrated from static HTML to **Next.js App Router + TypeScript** while preserving the existing branding, product content and images.

## Included
- Server/static rendered marketing pages
- RF / Wi-Fi Calibration solution page
- MediaTek, Realtek, Qualcomm and Broadcom platform positioning
- Turnkey FTTH, ONU/ONT, router and broadband manufacturing solutions
- Commpolar India catalogue with dedicated model URLs
- RF shield box catalogue with dedicated model URLs
- SEO metadata, canonical URLs, redirects, sitemap and robots metadata
- Product and organization structured data
- Contact / RFQ form with server-side email endpoint and email fallback

## Navigation
- Products → All Products, Commpolar, RF Shield Boxes
- Solutions → All Solutions, Wi-Fi Calibration
- Commpolar, RF Shield Boxes and Wi-Fi Calibration are intentionally removed from the top-level navbar.

## Local development
```bash
npm install
npm run dev
```

Production validation:
```bash
npm run build
npm start
```

## Environment variables
Copy `.env.example` to `.env.local` and configure:
```env
NEXT_PUBLIC_SITE_URL=https://rfequipment.in
RESEND_API_KEY=
RFQ_TO_EMAIL=info@rfequipment.in
RFQ_FROM_EMAIL=RF Equipment Website <website@rfequipment.in>
```

If `RESEND_API_KEY` is not configured, the RFQ form falls back to a pre-filled email to `info@rfequipment.in`.

## Deployment
The current production target is **Netlify**. Connect this GitHub repository, set the production branch to `main`, add the environment variables above, and use `npm run build` as the build command.

The previous static HTML version is preserved on the `static-html-backup` branch.
