import React from 'react';

function RestartButton({ handleRestart }) {
  return (
    <div className="button right" onClick={handleRestart}>
      Try a new image
    </div>
  );
}

function shouldUpdate(prevProps, nextProps) {
  if (prevProps !== nextProps) {
    return true;
  }
}

export default React.memo(RestartButton, shouldUpdate);
