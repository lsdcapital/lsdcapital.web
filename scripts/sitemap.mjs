// Builds dist/client/sitemap.xml from the prerendered pages, so every page
// the build outputs is listed without editing a file by hand. URLs are
// slashless to match the "drop-trailing-slash" asset handling in wrangler.jsonc.
import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const HOST = "https://lsd.capital";
const OUT_DIR = "dist/client";

function findPages(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return findPages(path);
    return entry.name === "index.html" ? [path] : [];
  });
}

const urls = findPages(OUT_DIR)
  .map((file) => {
    const dir = relative(OUT_DIR, file).split(sep).slice(0, -1).join("/");
    return dir ? `${HOST}/${dir}` : `${HOST}/`;
  })
  .sort((a, b) => a.length - b.length || a.localeCompare(b));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

writeFileSync(join(OUT_DIR, "sitemap.xml"), xml);
console.log(`[sitemap] Wrote ${urls.length} URLs to ${OUT_DIR}/sitemap.xml`);
