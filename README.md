# Bombshell Boss Babes — Client Preview Site

Replica of [bombshellbossbabes.com](https://bombshellbossbabes.com) with full shop, membership packages, and checkout-ready integrations.

**Version:** v1.0.1

**Live site:** https://mrbiggles524.github.io/bombshellbossbabes-redesign/

**Go-live checklist:** https://mrbiggles524.github.io/bombshellbossbabes-redesign/setup.html

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Membership | `membership.html` |
| Packages | `packages.html` |
| Shop (21 products) | `shop.html` |
| Product detail | `product.html?slug=...` |
| Events | `events.html` |
| TV Series | `tv-series.html` |
| Testimonials | `testimonials.html` |
| Contact | `contact.html` |
| Charity | `charity.html` |
| FAQ | `faq.html` |

## Local preview

```powershell
cd side-quests/bombshellbossbabes-redesign
python -m http.server 8902
```

Open http://127.0.0.1:8902/

## Payments & dropshipping

See **SETUP.md** for Snipcart + Printful (merch) and Stripe (membership) configuration.
