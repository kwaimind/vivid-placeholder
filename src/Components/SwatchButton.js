/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function SwatchButton(props) {
  const { showSwatches, setShowSwatches } = props.actions;
  return (
    <div className="button left" onClick={() => setShowSwatches(!showSwatches)}>
      {showSwatches ? 'Hide' : 'Show'}
      Swatches
    </div>
  );
}

SwatchButton.propTypes = {
  //
};
