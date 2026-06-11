(function () {
  const grid = document.getElementById("productGrid");
  if (!grid || !window.BBB_PRODUCTS) return;

  const urlCat = new URLSearchParams(window.location.search).get("cat");
  let filter = urlCat && ["apparel", "lifestyle", "office"].includes(urlCat) ? urlCat : "all";

  if (filter !== "all") {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.filter === filter);
    });
  }

  function render() {
    let items = window.BBB_PRODUCTS;
    if (filter !== "all") items = items.filter((p) => p.category === filter);

    grid.innerHTML = items
      .map(
        (p) => `
      <article class="product-card">
        <a href="product.html?slug=${encodeURIComponent(p.slug)}">
          <img class="product-card__img" src="${p.image}" alt="${p.name}" loading="lazy" />
        </a>
        <div class="product-card__body">
          <h3><a href="product.html?slug=${encodeURIComponent(p.slug)}">${p.name}</a></h3>
          <p class="price">${window.BBB_formatPrice(p.price)}</p>
          ${window.BBB_snipcartBtn(p, "Add to Cart")}
        </div>
      </article>`
      )
      .join("");

    if (window.BBB_CONFIG?.snipcartApiKey) {
      document.dispatchEvent(new Event("snipcart.ready"));
    }
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter = btn.dataset.filter || "all";
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      render();
    });
  });

  render();
})();
