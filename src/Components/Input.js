import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ useUploadedImage }) {
  return (
    <>
      <input
        className="file-input"
        type="file"
        id="file"
        onChange={useUploadedImage}
      />
      <label htmlFor="file">choose a file</label>
    </>
  );
}

Input.propTypes = {
  useUploadedImage: PropTypes.func.isRequired,
};
