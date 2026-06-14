// Next.js convention: this file becomes /sitemap.xml at build time.
//
// IMPORTANT: change SITE_URL below if your production domain differs from
// human-in-the-loop-solutions.org. Whatever you set here is what Google
// will use as the canonical URL for the site.
const SITE_URL = 'https://human-in-the-loop-solutions.org';

export default function sitemap() {
  const lastModified = new Date();

  // Each tab is now its own indexable URL after the multi-route refactor.
  // Priorities: home is the entry point (1.0), Services and Case Studies
  // are the conversion-critical pages (0.9), Practice and Contact are
  // supporting (0.7).
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/practice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
