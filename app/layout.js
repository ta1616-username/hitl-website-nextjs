import { Cormorant_Garamond, Inter, JetBrains_Mono, Italianno } from 'next/font/google';
import './globals.css';

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

export const metadata = {
  title: 'Human-in-the-Loop Solutions',
  description: 'Where instruction becomes intelligence. Bridging AI Potential with Human Expertise.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale removed — pinning it to 1 blocked pinch-to-zoom on iOS,
  // which is an accessibility regression. Users with low vision rely on
  // browser zoom; the viewport meta should never disable it.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${italianno.variable}`}>
      <body>{children}</body>
    </html>
  );
}
