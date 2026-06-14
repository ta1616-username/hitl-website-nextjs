import PracticeClient from './client';

export const metadata = {
  title: 'Practice',
  description:
    "My philosophy: Instructive Flow. The difference between an example that teaches and one that misleads comes down to precision. The 4U standard — Unequivocally Correct, Uniform, Useful, Understandable — that turns an off-beat reply into a Golden Response.",
  keywords: [
    '4U standard',
    'Golden Response',
    'AI annotation philosophy',
    'instructive flow',
    'human-in-the-loop methodology',
    'RLHF principles',
  ],
  alternates: {
    canonical: '/practice',
  },
  openGraph: {
    title: 'Practice | Human-in-the-Loop Solutions',
    description:
      "The 4U standard — Unequivocally Correct, Uniform, Useful, Understandable — applied to every Golden Response.",
    url: '/practice',
  },
};

export default function PracticePage() {
  return <PracticeClient />;
}
