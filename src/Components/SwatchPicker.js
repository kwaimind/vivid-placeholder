import React, { useContext } from 'react';

import AppContext from '../Context/AppContext';

export default function SwatchPicker() {
  return (
    <div className="swatch-overlay">
      <div className="swatches">
        <RenderSwatches />
      </div>
    </div>
  );
}

function RenderSwatches() {
  const colors = useContext(AppContext);
  return colors.slice(0, 6).map((color) => (
    <div
      key={color.toString()}
      className="swatch-item mono-text"
      style={{
        backgroundColor: color,
      }}
    >
      {color}
    </div>
  ));
}
