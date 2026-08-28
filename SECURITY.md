# Security posture

This is a static portfolio site (Next.js): no login, no database, no forms
that accept user input, no server-side logic beyond serving pages. That
shrinks the realistic attack surface a lot compared to a typical web app —
there's nowhere for someone to inject data that gets stored or executed.
What's below covers what's actually in place, and why a couple of
higher-effort options were deliberately skipped.

## What's in place

**HTTP security headers** (`next.config.ts`, applied to every route):

| Header | Value | Purpose |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | Stops the browser guessing file types, which blocks some MIME-confusion attacks. |
| `X-Frame-Options` | `DENY` | Site can't be embedded in an `<iframe>` on another domain — blocks clickjacking. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits how much of the URL leaks to other sites when someone clicks a link off this site. |
| `Permissions-Policy` | camera/microphone/geolocation disabled | None of these are used; explicitly turning them off means an embedded script couldn't request them either. |
| `Content-Security-Policy` | see below | Restricts which origins scripts, styles, fonts, and images can load from. |

**Content-Security-Policy**, in plain terms: everything (scripts, styles,
fonts, images, connections) must come from this site's own origin, with two
exceptions — inline scripts/styles are allowed (`'unsafe-inline'`, see
below), and images can also be `data:` URIs. Framing by other sites is
blocked (`frame-ancestors 'none'`), and there's no `<form>` posting
anywhere off-site (`form-action 'self'`).

**Fonts are self-hosted.** `next/font` downloads Quicksand and Lato at
build time and serves them from this site's own origin — no runtime
request to Google Fonts, so there's no third-party font host to worry
about or explicitly allow.

**No secrets in the repo.** There are no API keys, tokens, or `.env` files
anywhere in the codebase — checked directly, and `.gitignore` excludes
`.env*` regardless. Nothing here needs a secret: no third-party API calls,
no server-side integrations.

**Dependencies are clean.** `npm audit` reports 0 vulnerabilities as of this
write-up. Worth re-running (`npm audit`) periodically, especially before
each deploy, since new CVEs get disclosed against existing package versions
over time.

**Analytics is privacy-respecting.** Vercel Analytics (`@vercel/analytics`)
collects aggregate visit counts without cookies or personal data, so it
doesn't need a cookie-consent banner.

## What was deliberately left out, and why

**A strict nonce-based CSP** (`script-src 'nonce-...' 'strict-dynamic'`,
no `'unsafe-inline'`) was tried first, since it's the more locked-down
option — it would mean *zero* inline scripts or styles could run unless
explicitly signed off per-request. In practice it broke the site: Next.js
injects its own inline hydration scripts and `next/font`'s inline
`@font-face` styles, and even with a middleware-based nonce wired up
following Next's documented pattern, several of those internal scripts
still weren't picking up the nonce and got blocked — which silently killed
all client-side interactivity, including the homepage's horizontal-scroll
case study section. For a static site with no user input and nothing an
attacker could inject, that trade — real fragility for a security gain that
mainly matters when there *is* untrusted content on the page — wasn't worth
it. `'unsafe-inline'` combined with `default-src 'self'` still blocks the
main realistic risk (a malicious *external* script or stylesheet loading
into the page); it just doesn't defend against an inline script that was
already injected some other way, which isn't a live risk here.

**Rate limiting / bot protection** wasn't added — there's no form or API
endpoint to abuse. If a contact form gets added later, that's the point to
revisit this.

**HSTS / forced HTTPS** isn't configured in-app because Vercel handles this
automatically for every deployment and custom domain (including the
GoDaddy domain once it's pointed at Vercel) — no action needed here.

## Before publishing

- [ ] Run `npm audit` one more time right before deploy.
- [ ] Once the domain is finalized, update `metadataBase` in
      `src/app/layout.tsx` and `SITE_URL` in `src/app/sitemap.ts` — both are
      currently placeholders.
- [ ] After deploying, spot-check the CSP header in production
      (`curl -I https://yourdomain.com`) and open the browser console on a
      couple of pages to confirm nothing's being blocked unexpectedly —
      Vercel's platform sometimes injects its own scripts (e.g. speed
      insights, if enabled later) that would need adding to the CSP.
