import React, { useState } from 'react';

import SwatchButton from './SwatchButton';
import SwatchPicker from './SwatchPicker';

export default function Swatches({ colors }) {
  const [showSwatches, setShowSwatches] = useState(false);

  return (
    <>
      <SwatchButton toggle={showSwatches} action={setShowSwatches} />
      {showSwatches && <SwatchPicker colors={colors} />}
    </>
  );
}
