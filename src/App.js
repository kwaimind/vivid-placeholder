import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';

import { introColors } from './Constants';
import SwatchButton from './Components/SwatchButton';
import RestartButton from './Components/RestartButton';
import SwatchPicker from './Components/SwatchPicker';

import './App.css';

export default function App() {
  const [colors, setcolors] = useState([]);
  const [imageUrl, setimageUrl] = useState('');
  const [fileName, setfileName] = useState('');
  const [fileType, setfileType] = useState('');
  const [swatchOverlay, setswatchOverlay] = useState(false);

  function setIntroBackground() {
    document.body.style.backgroundColor =
      introColors[Math.floor(Math.random() * introColors.length)];
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleRestart() {
    setimageUrl('');
    setfileName('');
    setfileType('');
    setcolors([]);
    setIntroBackground();
  }

  function handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file;
    if (e.type === 'click') {
      file = 'https://source.unsplash.com/random';
      setimageUrl(file);
      setfileType('image/png');
      setfileName('Tiko Giorgadze');
    } else {
      file = e.target.files[0];
      reader.onloadend = () => {
        setimageUrl(URL.createObjectURL(file));
        setfileType(file.type);
        setfileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  }

  function extractColors() {
    if (imageUrl) {
      return <ColorExtractor src={imageUrl} getColors={handleColors} />;
    }
  }

  function handleColors(colors) {
    setcolors([...colors, ...colors]);
    document.body.style.backgroundColor = colors[0];
  }

  function renderSwatches() {
    return colors.slice(0, 6).map((color, id) => {
      return (
        <div
          key={id}
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

  function swatchOverlaySwitch() {
    swatchOverlay ? setswatchOverlay(false) : setswatchOverlay(true);
  }

  return (
    <div className="app">
      {!imageUrl && (
        <div className="intro">
          {setIntroBackground()}
          <span className="emoji" role="img" aria-label="camera">
            📷
          </span>
          <h1>Vivid Placeholder</h1>
          <p>
            Upload an image to find it's dominant color and swatches. <br />
            Or take a{' '}
            <span
              className="random-image"
              onClick={(e) => handleImageChange(e)}
            >
              random Unsplash image.
            </span>
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="file-input"
              type="file"
              id="file"
              onChange={(e) => handleImageChange(e)}
            />
            <label htmlFor="file">choose a file</label>
          </form>
        </div>
      )}

      {extractColors()}

      {colors.length > 0 ? (
        fileType.includes('image') ? (
          <div>
            <div className="img-preview">
              <img src={imageUrl} alt={fileName} />
            </div>
            {swatchOverlay && <SwatchPicker renderSwatches={renderSwatches} />}
            <SwatchButton toggle={swatchOverlay} action={swatchOverlaySwitch} />
            <RestartButton handleRestart={handleRestart} />
          </div>
        ) : (
          <p>Whoops. You need to upload an image for this to work.</p>
        )
      ) : null}
    </div>
  );
}
