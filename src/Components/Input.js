import React from 'react';

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
