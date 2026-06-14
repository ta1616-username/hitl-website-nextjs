import { ContactView } from '@/lib/homepage';

export const metadata = {
  title: 'Contact',
  description:
    "Get in touch about a collaboration, a project, or just to compare notes on AI annotation craft. Email, LinkedIn, or WhatsApp — responses usually within two working days.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Human-in-the-Loop Solutions',
    description:
      "Get in touch about a collaboration, a project, or just to compare notes on AI annotation craft.",
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactView />;
}
