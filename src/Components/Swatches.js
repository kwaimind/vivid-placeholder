import React, { useState } from 'react';

import SwatchButton from './SwatchButton';
import SwatchPicker from './SwatchPicker';

export default function Swatches() {
  const [showSwatches, setShowSwatches] = useState(false);

  return (
    <>
      <SwatchButton actions={{ showSwatches, setShowSwatches }} />
      {showSwatches && <SwatchPicker />}
    </>
  );
}
