import { Services } from '@/lib/sections';

export const metadata = {
  title: 'Services',
  description:
    "Four disciplines at the intersection of language, instruction and judgement: AI Annotation Strategy, Alignment Research, Language Education, Quality Assurance & Calibration. Every Golden Response checked against the 4U standard — Unequivocally Correct, Uniform, Useful, Understandable.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Human-in-the-Loop Solutions',
    description:
      "Four disciplines at the intersection of language, instruction and judgement. Annotation strategy, alignment research, language education, and quality assurance.",
    url: '/services',
  },
};

export default function ServicesPage() {
  return <Services />;
}
