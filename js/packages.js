(function () {
  const grid = document.getElementById("packagesGrid");
  if (!grid || !window.BBB_PACKAGES) return;

  const links = window.BBB_CONFIG?.stripeMembershipLinks || {};

  grid.innerHTML = window.BBB_PACKAGES.map((pkg, i) => {
    const link = links[pkg.id];
    const cta = link
      ? `<a class="btn btn--gold" href="${link}" target="_blank" rel="noopener">Apply & Pay</a>`
      : `<a class="btn btn--gold" href="contact.html?package=${pkg.id}">Apply Now</a>`;
    return `
    <article class="package-card${i === 0 ? " package-card--featured" : ""}">
      <p class="eyebrow">${pkg.term}</p>
      <h3>${pkg.name}</h3>
      <p class="price">${window.BBB_formatPrice(pkg.price)}</p>
      <p style="font-size:0.85rem;color:var(--gray)">/ ${pkg.term}</p>
      <ul>${pkg.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      ${cta}
    </article>`;
  }).join("");
})();
