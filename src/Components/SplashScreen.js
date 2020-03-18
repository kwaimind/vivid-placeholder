import React from 'react';
import PropTypes from 'prop-types';

export default function SplashScreen({ useRandomImage }) {
  return (
    <>
      <span className="emoji" role="img" aria-label="camera">
        📷
      </span>
      <h1>Vivid Placeholder</h1>
      <p>
        Upload an image to find it&apos;s dominant color and swatches.
        <br />
        Or take a &nbsp;
        <span className="random-image" role="button" onClick={useRandomImage}>
          random Unsplash image.
        </span>
      </p>
    </>
  );
}

SplashScreen.propTypes = {
  useRandomImage: PropTypes.func.isRequired,
};
