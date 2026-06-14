'use client';

import { useState } from 'react';
import { PracticeView, FourUModal } from '@/lib/homepage';

// Client wrapper for the Practice page. Holds the "4U modal open"
// state and renders the modal when the 4U badge is clicked.
export default function PracticeClient() {
  const [show4UModal, setShow4UModal] = useState(false);

  return (
    <>
      <PracticeView on4UClick={() => setShow4UModal(true)} />
      {show4UModal && (
        <FourUModal onClose={() => setShow4UModal(false)} />
      )}
    </>
  );
}
