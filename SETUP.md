# Bombshell Boss Babes — Client Setup Guide

This preview site replicates [bombshellbossbabes.com](https://bombshellbossbabes.com) with **working shop cart**, **payment checkout**, and **dropship fulfillment** ready to connect.

## 1. Merch checkout (Snipcart + Printful)

**Snipcart** handles cart, checkout, and taxes on this static site. **Printful** prints and ships orders to buyers.

1. Create accounts at [snipcart.com](https://snipcart.com) and [printful.com](https://printful.com).
2. In Printful: create products matching the BBB catalog (use same images from `js/products.js`).
3. In Snipcart Dashboard → **Apps** → connect **Printful**.
4. Map each Snipcart product ID (the `slug` in `products.js`) to the Printful variant.
5. Copy your **Snipcart public API key** into `js/config.js`:

```js
snipcartApiKey: "YOUR_SNIPCART_PUBLIC_API_KEY",
```

6. Redeploy. "Add to Cart" and "View Cart & Checkout" will open live checkout.

**Test mode:** Snipcart provides a test API key for staging before going live.

## 2. Membership payments (Stripe)

High-ticket packages ($1,999–$5,999) use **Stripe Payment Links**:

1. Create a [Stripe](https://stripe.com) account.
2. Products → Payment Links for Diamond, Gold, Crystal packages.
3. Paste URLs into `js/config.js`:

```js
stripeMembershipLinks: {
  diamond: "https://buy.stripe.com/...",
  gold: "https://buy.stripe.com/...",
  crystal: "https://buy.stripe.com/...",
},
```

Until links are set, "Apply Now" routes to the contact form.

## 3. Contact form

The preview uses `mailto:info@IAOTP.com`. For a web form that captures leads without opening email, add [Formspree](https://formspree.io), Netlify Forms, or similar to `contact.html`.

## 4. Go live on custom domain

- Deploy to GitHub Pages, Netlify, or Vercel.
- Point `bombshellbossbabes.com` DNS to hosting.
- Add domain in Snipcart and Stripe dashboards.

## 5. Version bumps

Update `BBB_APP_VERSION` in `version.js` and all `?v=` query strings in HTML when publishing updates.
