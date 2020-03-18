import React from 'react';

export default function Component(props) {
  return (
    <div className="button right" onClick={props.handleRestart}>
      Try a new image
    </div>
  );
}
