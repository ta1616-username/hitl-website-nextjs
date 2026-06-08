// Next.js convention: this file becomes /sitemap.xml at build time.
//
// IMPORTANT: change SITE_URL below if your production domain differs from
// human-in-the-loop-solutions.org. Whatever you set here is what Google
// will use as the canonical URL for the site.
const SITE_URL = 'https://human-in-the-loop-solutions.org';

export default function sitemap() {
  const lastModified = new Date();

  // Right now the site is a single multi-tab page, so there is only one
  // canonical URL to advertise. When each tab is split into its own route
  // (a separate piece of work), add entries for /services, /case-studies,
  // /practice and /contact here so Google indexes them individually.
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
