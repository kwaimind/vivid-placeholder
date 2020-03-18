import React from 'react';

export default function SwatchButton(props) {
  const { showSwatches, setShowSwatches } = props.actions;
  return (
    <div className="button left" onClick={() => setShowSwatches(!showSwatches)}>
      {showSwatches ? 'Hide' : 'Show'} Swatches
    </div>
  );
}
