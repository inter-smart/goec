import fs from "fs";
import path from "path";

const baseUrl = "https://goec-beta-dev.netlify.app";

// Automatically discover static routes from app directory
function getStaticRoutes(dir, baseRoute = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip special directories and dynamic routes
    if (
      entry.name.startsWith("_") ||
      entry.name === "api" ||
      entry.name.includes("[") // Skip [slug] folders
    ) {
      continue;
    }

    if (entry.isDirectory()) {
      // Check if directory has page.js
      const hasPage = fs.existsSync(path.join(fullPath, "page.js")) || fs.existsSync(path.join(fullPath, "page.tsx"));

      if (hasPage) {
        const route = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`;
        routes.push(route);
      }

      // Recursively check subdirectories
      routes = routes.concat(getStaticRoutes(fullPath, baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`));
    }
  }

  return routes;
}

export default async function sitemap() {
  const appDir = path.join(process.cwd(), "src");

  // Get all static routes automatically
  const staticPaths = getStaticRoutes(appDir);

  // Add root route
  const allStaticPaths = ["/", ...staticPaths];

  const staticRoutes = allStaticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
