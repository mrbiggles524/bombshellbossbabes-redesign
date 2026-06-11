(function () {
  const C = window.BBB_CONFIG || {};

  function initSnipcart() {
    const key = (C.snipcartApiKey || "").trim();
    if (!key) {
      document.querySelectorAll(".snipcart-add-item").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          if (!key) {
            e.preventDefault();
            showToast("Checkout activates once Snipcart API key is added — see SETUP.md");
          }
        });
      });
      return;
    }
    if (document.getElementById("snipcart")) return;
    const div = document.createElement("div");
    div.hidden = true;
    div.id = "snipcart";
    div.setAttribute("data-api-key", key);
    div.setAttribute("data-config-modal-style", "side");
    div.setAttribute("data-currency", "usd");
    document.body.appendChild(div);
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js";
    document.head.appendChild(s);
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css";
    document.head.appendChild(l);
  }

  function showToast(msg) {
    let t = document.getElementById("bbbToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "bbbToast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove("show"), 3500);
  }
  window.BBB_toast = showToast;

  function productPageUrl(slug) {
    return "product.html?slug=" + encodeURIComponent(slug);
  }
  window.BBB_productUrl = productPageUrl;

  function snipcartBtn(product, label) {
    const base = window.location.origin + window.location.pathname.replace(/[^/]+$/, "");
    const url = base + productPageUrl(product.slug);
    return `<button class="btn btn--primary snipcart-add-item"
      data-item-id="${product.slug}"
      data-item-name="${product.name.replace(/"/g, "&quot;")}"
      data-item-price="${product.price}"
      data-item-url="${url}"
      data-item-image="${product.image}"
      data-item-description="${(product.desc || "").replace(/"/g, "&quot;")}"
      type="button">${label || "Add to Cart"}</button>`;
  }
  window.BBB_snipcartBtn = snipcartBtn;

  initSnipcart();
})();
