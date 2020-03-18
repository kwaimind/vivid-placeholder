import React from 'react';

export default function SwatchPicker(props) {
  return (
    <div className="swatch-overlay">
      <div className="swatches">{props.renderSwatches()}</div>
    </div>
  );
}
