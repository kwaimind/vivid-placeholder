import React from 'react';

export default function SplashScreen(props) {
  return (
    <>
      <span className="emoji" role="img" aria-label="camera">
        📷
      </span>
      <h1>Vivid Placeholder</h1>
      <p>
        Upload an image to find it's dominant color and swatches. <br />
        Or take a{' '}
        <span className="random-image" onClick={props.useRandomImage}>
          random Unsplash image.
        </span>
      </p>
    </>
  );
}
