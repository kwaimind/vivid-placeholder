import React from 'react';

export default function SwatchPicker({ colors }) {
  return (
    <div className="swatch-overlay">
      <div className="swatches">
        <RenderSwatches colors={colors} />
      </div>
    </div>
  );
}

function RenderSwatches({ colors }) {
  return colors.slice(0, 6).map((color) => {
    return (
      <div
        key={color.toString()}
        className="swatch-item mono-text"
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </div>
    );
  });
}
