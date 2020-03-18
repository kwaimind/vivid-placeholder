import React from 'react';
import PropTypes from 'prop-types';

function RestartButton({ handleRestart }) {
  return (
    <div
      className="button right"
      onClick={handleRestart}
      onKeyDown={handleRestart}
      role="form"
    >
      Try a new image
    </div>
  );
}

function shouldUpdate(prevProps, nextProps) {
  return prevProps !== nextProps;
}

RestartButton.propTypes = {
  handleRestart: PropTypes.func.isRequired,
};

export default React.memo(RestartButton, shouldUpdate);
