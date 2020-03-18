import React from 'react';

export default function SwatchButton({ action, toggle }) {
  return (
    <div className="button left" onClick={() => action(!toggle)}>
      {toggle ? 'Hide' : 'Show'} Swatches
    </div>
  );
}
