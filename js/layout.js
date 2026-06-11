(function () {
  const C = window.BBB_CONFIG || {};
  const ver = window.BBB_APP_VERSION || "1.0.0";
  const path = window.location.pathname.replace(/\/$/, "") || "/index.html";
  const isHome = path.endsWith("index.html") || path === "" || path.endsWith("/bombshellbossbabes-redesign");

  const nav = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
    { href: "membership.html", label: "Membership" },
    { href: "packages.html", label: "Packages" },
    { href: "shop.html", label: "Shop" },
    { href: "events.html", label: "Events" },
    { href: "tv-series.html", label: "TV Series" },
    { href: "testimonials.html", label: "Testimonials" },
    { href: "contact.html", label: "Contact" },
  ];

  function isActive(href) {
    const file = path.split("/").pop() || "index.html";
    return file === href || (href === "index.html" && file === "");
  }

  const navHtml = nav
    .map((n) => `<a class="nav__link${isActive(n.href) ? " is-active" : ""}" href="${n.href}">${n.label}</a>`)
    .join("");

  const header = `
  <header class="site-header">
    <div class="container header__inner">
      <a class="logo" href="index.html">
        <img src="${C.logo}" alt="${C.siteName}" width="180" height="48" />
      </a>
      <button class="nav-toggle" id="navToggle" type="button" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" id="siteNav">${navHtml}</nav>
      <a class="header__cart snipcart-checkout" href="shop.html#cart" title="Cart">
        <span class="header__cart-icon">🛍️</span>
        <span class="header__cart-label">Cart</span>
        <span class="snipcart-items-count cart-count">0</span>
      </a>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container footer__grid">
      <div>
        <img class="footer__logo" src="${C.logoWhite}" alt="${C.siteName}" width="160" />
        <p class="footer__tag">Elite networking for women who lead.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="about.html">About</a>
        <a href="membership.html">Membership</a>
        <a href="packages.html">Packages</a>
        <a href="shop.html">Shop</a>
        <a href="events.html">Events</a>
      </div>
      <div>
        <h4>More</h4>
        <a href="tv-series.html">TV Series</a>
        <a href="testimonials.html">Testimonials</a>
        <a href="charity.html">Charity</a>
        <a href="faq.html">FAQ</a>
        <a href="contact.html">Contact</a>
        <a href="setup.html">Go Live Setup</a>
      </div>
      <div>
        <h4>Contact</h4>
        <p>${C.contactAddress}</p>
        <p><a href="mailto:${C.contactEmail}">${C.contactEmail}</a></p>
        <p><a href="tel:${(C.contactPhone || "").replace(/\D/g, "")}">${C.contactPhone}</a></p>
      </div>
    </div>
    <div class="footer__bar">
      <span>© ${new Date().getFullYear()} ${C.siteName}</span>
      <span class="demo-badge">Client Preview v${ver}</span>
    </div>
  </footer>`;

  const mountH = document.getElementById("site-header");
  const mountF = document.getElementById("site-footer");
  if (mountH) mountH.innerHTML = header;
  if (mountF) mountF.innerHTML = footer;

  document.getElementById("navToggle")?.addEventListener("click", () => {
    document.getElementById("siteNav")?.classList.toggle("is-open");
  });
})();
