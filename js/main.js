(function () {
  const base = window.BBB_CONFIG || {};
  const local = window.BBB_CONFIG_LOCAL || {};
  const C = Object.assign({}, base, {
    snipcartApiKey: local.snipcartApiKey || base.snipcartApiKey,
    stripeMembershipLinks: Object.assign({}, base.stripeMembershipLinks, local.stripeMembershipLinks),
  });
  window.BBB_CONFIG = C;

  function initSnipcart() {
    const key = (C.snipcartApiKey || "").trim();
    if (!key) {
      showCheckoutBanner();
      document.querySelectorAll(".snipcart-add-item").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          showToast("Add Snipcart API key in js/config.js — see setup.html");
        });
      });
      document.querySelectorAll(".snipcart-checkout").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          window.location.href = "setup.html#snipcart";
        });
      });
      return;
    }
    hideCheckoutBanner();
    showTestCheckoutBanner();
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

  function hideCheckoutBanner() {
    const b = document.getElementById("bbbCheckoutBanner");
    if (b) b.remove();
  }

  function showCheckoutBanner() {
    if (document.getElementById("bbbCheckoutBanner")) return;
    const b = document.createElement("div");
    b.id = "bbbCheckoutBanner";
    b.className = "checkout-banner";
    b.innerHTML =
      'Shop preview mode — <a href="setup.html">finish checkout setup</a> to accept orders & dropship.';
    document.body.prepend(b);
  }

  function showTestCheckoutBanner() {
    if (document.getElementById("bbbTestBanner")) return;
    const b = document.createElement("div");
    b.id = "bbbTestBanner";
    b.className = "checkout-banner";
    b.style.background = "#5cd85a";
    b.innerHTML =
      'TEST checkout on — use card <strong>4242 4242 4242 4242</strong> · any future date · any CVC';
    document.body.prepend(b);
  }

  function absoluteProductUrl(slug) {
    const dir = window.location.href.replace(/[^/]*$/, "");
    return dir + productPageUrl(slug);
  }

  function snipcartBtn(product, label) {
    const url = absoluteProductUrl(product.slug);
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
