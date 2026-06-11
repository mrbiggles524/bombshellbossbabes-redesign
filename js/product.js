(function () {
  const root = document.getElementById("productDetail");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("slug");
  const product = window.BBB_getProduct(slug);

  if (!product) {
    root.innerHTML = "<p>Product not found. <a href='shop.html'>Back to shop</a></p>";
    return;
  }

  document.title = product.name + " — Bombshell Boss Babes";

  const related = window.BBB_PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  root.innerHTML = `
    <div class="product-detail">
      <div class="product-detail__img">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div>
        <p class="eyebrow">${product.category.replace(/^\w/, (c) => c.toUpperCase())}</p>
        <h1>${product.name}</h1>
        <p class="price">${window.BBB_formatPrice(product.price)}</p>
        <p>${product.desc}</p>
        <p style="margin:1.5rem 0 0.5rem;font-size:0.85rem;color:var(--gray)">Printed on demand & shipped to your door.</p>
        ${window.BBB_snipcartBtn(product, "Add to Cart — $" + product.price.toFixed(2))}
        <p style="margin-top:1rem"><a href="shop.html">← Continue shopping</a></p>
      </div>
    </div>
    ${
      related.length
        ? `<div class="section" style="padding-top:3rem">
        <h2 style="text-align:center;margin-bottom:1.5rem">Related Products</h2>
        <div class="product-grid">${related
          .map(
            (p) => `
          <article class="product-card">
            <a href="product.html?slug=${p.slug}"><img class="product-card__img" src="${p.image}" alt="${p.name}" /></a>
            <div class="product-card__body">
              <h3>${p.name}</h3>
              <p class="price">${window.BBB_formatPrice(p.price)}</p>
            </div>
          </article>`
          )
          .join("")}</div></div>`
        : ""
    }`;

})();
