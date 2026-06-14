import { Cormorant_Garamond, Inter, JetBrains_Mono, Italianno } from 'next/font/google';
import './globals.css';
import { NavBar, Footer } from '@/lib/sections';

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italianno',
  display: 'swap',
});

// Change this constant if your production domain differs from the email domain.
// metadataBase tells Next.js what the absolute base URL is when generating
// OG and canonical links, so it has to match what you actually deploy under.
const SITE_URL = 'https://human-in-the-loop-solutions.org';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Human-in-the-Loop Solutions — Where instruction becomes intelligence',
    template: '%s | Human-in-the-Loop Solutions',
  },
  description:
    'A research-led practice in the craft of Golden Responses: carefully designed examples that teach modern language models to be correct, careful and humane under pressure. AI annotation, alignment research, and language pedagogy.',
  keywords: [
    'AI annotation',
    'RLHF',
    'Golden Response',
    'AI alignment',
    'language model training',
    'reinforcement learning from human feedback',
    'AI safety',
    'TESOL',
    'applied linguistics',
    'human-in-the-loop',
    'AI pedagogy',
  ],
  authors: [{ name: 'Human-in-the-Loop Solutions' }],
  creator: 'Human-in-the-Loop Solutions',
  publisher: 'Human-in-the-Loop Solutions',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'Human-in-the-Loop Solutions',
    title: 'Human-in-the-Loop Solutions — Where instruction becomes intelligence',
    description:
      'A research-led practice in the craft of Golden Responses. AI annotation, alignment research, and language pedagogy — bridging human expertise with AI potential.',
    // The OG image is generated automatically from app/opengraph-image.js,
    // so no images array is needed here. Next.js picks it up by convention.
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human-in-the-Loop Solutions — Where instruction becomes intelligence',
    description:
      'A research-led practice in the craft of Golden Responses. AI annotation, alignment research, and language pedagogy.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // verification token slots — add these when you set up Google Search
  // Console and Bing Webmaster Tools (see SEO-SETUP.md for instructions).
  // verification: {
  //   google: 'PASTE-GOOGLE-VERIFICATION-TOKEN-HERE',
  //   other: { 'msvalidate.01': 'PASTE-BING-TOKEN-HERE' },
  // },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale removed — pinning it to 1 blocked pinch-to-zoom on iOS,
  // which is an accessibility regression. Users with low vision rely on
  // browser zoom; the viewport meta should never disable it.
};

// JSON-LD structured data tells Google what kind of entity this is.
// An "Organization" schema gives you the best chance of a rich result
// in search (logo, social links, contact email, etc.).
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Human-in-the-Loop Solutions',
  alternateName: 'HITL Solutions',
  url: SITE_URL,
  description:
    'A research-led practice in the craft of Golden Responses for AI alignment and annotation.',
  email: 'hello@human-in-the-loop-solutions.org',
  knowsAbout: [
    'AI annotation',
    'Reinforcement learning from human feedback',
    'Language model alignment',
    'Applied linguistics',
    'TESOL',
    'Organisational learning',
  ],
  areaServed: 'Worldwide',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${italianno.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
