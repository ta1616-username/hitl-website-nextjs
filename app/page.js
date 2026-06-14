import { Hero } from '@/lib/sections';

// Home page metadata. Falls back to the layout's defaults for
// most fields; only the description is customised here so the
// home page reads as the "front door" of the practice.
export const metadata = {
  // Title intentionally omitted — layout.js provides the default
  // 'Human-in-the-Loop Solutions — Where instruction becomes intelligence'
  // which is the right one for the homepage.
  description:
    "I'm Tommy, an AI Annotator and Trainer working on the data pipelines that power Large Language Models. I craft Golden Responses that are safer, more accurate and aligned with human values.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <Hero />;
}
