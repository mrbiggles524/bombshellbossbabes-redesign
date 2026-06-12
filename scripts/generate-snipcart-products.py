"""Generate static HTML product pages for Snipcart URL validation."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://mrbiggles524.github.io/bombshellbossbabes-redesign"

# Parse products from products.js (simple regex)
text = (ROOT / "js" / "products.js").read_text(encoding="utf-8")
pattern = re.compile(
    r'\{\s*slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*price:\s*([\d.]+),'
    r'[^}]*image:\s*"([^"]+)",\s*desc:\s*"([^"]+)"\s*\}',
)
products = pattern.findall(text)

out = ROOT / "products"
out.mkdir(exist_ok=True)

for slug, name, price, image, desc in products:
    url = f"{SITE}/products/{slug}.html"
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{name} — Bombshell Boss Babes</title>
  <link rel="canonical" href="{url}" />
</head>
<body>
  <h1>{name}</h1>
  <p>${float(price):.2f}</p>
  <img src="{image}" alt="{name}" width="400" />
  <p>{desc}</p>
  <button
    class="snipcart-add-item"
    data-item-id="{slug}"
    data-item-name="{name}"
    data-item-price="{price}"
    data-item-url="{url}"
    data-item-image="{image}"
    data-item-description="{desc}"
    type="button"
  >Add to cart</button>
  <p><a href="../shop.html">Back to shop</a></p>
</body>
</html>
"""
    (out / f"{slug}.html").write_text(html, encoding="utf-8")
    print("wrote", slug)

print(f"Generated {len(products)} product pages")
