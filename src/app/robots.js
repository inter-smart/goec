export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://goec-beta-dev.netlify.app/sitemap.xml",
  };
}
