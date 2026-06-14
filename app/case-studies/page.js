import CaseStudiesClient from './client';

export const metadata = {
  title: 'Case Studies',
  description:
    "Three snapshots from my work in AI training architectures, showing the gap between a near-miss answer and a Golden Response: linguistic constraints, AI tutoring with multi-step reasoning, and empathy calibration with safety alignment. Each comes with an annotated infographic walkthrough.",
  keywords: [
    'RLHF case study',
    'linguistic constraints',
    'AI tutoring',
    'empathy calibration',
    'AI safety alignment',
    'Golden Response examples',
  ],
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Human-in-the-Loop Solutions',
    description:
      "Three RLHF edge cases from real annotation work, each with an annotated infographic walkthrough.",
    url: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
