'use client';

import { useState } from 'react';
import { CaseStudiesView, InfographicModal } from '@/lib/homepage';

// Client wrapper for the Case Studies page. Holds the
// "currently-open infographic" state and renders the modal
// on top of CaseStudiesView when a case is selected.
export default function CaseStudiesClient() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <>
      <CaseStudiesView onExploreCase={(id) => setSelectedCase(id)} />
      {selectedCase && (
        <InfographicModal
          caseId={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </>
  );
}
