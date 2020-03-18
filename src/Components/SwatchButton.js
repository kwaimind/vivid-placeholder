import React from 'react';

export default function SwatchButton(props) {
  return (
    <div className="button left" onClick={props.action}>
      {!props.toggle ? 'Show' : 'Hide'} Swatches
    </div>
  );
}
