import pathlib

root = pathlib.Path(__file__).resolve().parent.parent
bad = "</script>`n  <script src=\"js/config.local.js?v=1.0.1\"></script>"
good = "</script>\n  <script src=\"js/config.local.js?v=1.0.1\"></script>"
for p in root.glob("*.html"):
    t = p.read_text(encoding="utf-8")
    if bad in t:
        t = t.replace(bad, good)
        if p.name == "setup.html":
            dup = good + "\n  <script src=\"js/config.local.js?v=1.0.1\"></script>"
            t = t.replace(dup, good)
        p.write_text(t, encoding="utf-8")
        print("fixed", p.name)
