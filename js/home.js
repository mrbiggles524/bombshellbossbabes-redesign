(function () {
  const el = document.getElementById("bestsellers");
  if (!el || !window.BBB_PRODUCTS) return;

  const slugs = [
    "tank-top-white",
    "bombshell-boss-babe-pillow",
    "bombshell-boss-babes-mug",
    "bombshell-boss-babes-note-pad",
    "bombshell-boss-babes-zip-up",
    "bombshell-boss-babes-sweatpants",
    "bombshell-boss-babes-shorts",
    "bombshell-boss-babes-cheer-shorts",
  ];

  el.innerHTML = slugs
    .map((s) => window.BBB_getProduct(s))
    .filter(Boolean)
    .map(
      (p) => `
    <article class="product-card">
      <a href="product.html?slug=${p.slug}"><img class="product-card__img" src="${p.image}" alt="${p.name}" loading="lazy" /></a>
      <div class="product-card__body">
        <h3>${p.name}</h3>
        <p class="price">${window.BBB_formatPrice(p.price)}</p>
        ${window.BBB_snipcartBtn(p, "Add to Cart")}
      </div>
    </article>`
    )
    .join("");
})();
