import { posts } from "../../data/posts";

// ❌ MAL: terminaba en "/"
// const BASE_URL = "https://proyecto-seo-three.vercel.app/";

// ✔️ BIEN: sin barra final
const BASE_URL = "https://proyecto-seo-three.vercel.app";

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];

  const urls = [
    ...staticUrls,
    ...posts.map((post) => `/blog/${post.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        // Evita doble barra
        const loc = url === "/" ? `${BASE_URL}/` : `${BASE_URL}${url}`;
        return `
        <url>
          <loc>${loc}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
