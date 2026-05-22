import './globals.css';

export const metadata = {
  title: 'Human-In-The-Loop Solutions',
  description: 'Where instruction becomes intelligence. Bridging AI Potential with Human Expertise.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
