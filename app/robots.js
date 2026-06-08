// Next.js convention: this file becomes /robots.txt at build time.
//
// Change SITE_URL to match the production domain if it differs.
const SITE_URL = 'https://human-in-the-loop-solutions.org';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block crawlers from the Next.js internals — they should not be
        // indexed and serve no SEO purpose.
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
