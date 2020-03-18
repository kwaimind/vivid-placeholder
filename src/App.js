import React, { useState, useEffect } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

import { introColors } from './Constants';
import SwatchButton from './Components/SwatchButton';
import RestartButton from './Components/RestartButton';
import SwatchPicker from './Components/SwatchPicker';
import SplashScreen from './Components/SplashScreen';

import './App.css';

export default function App() {
  const [colors, setcolors] = useState([]);
  const [restart, setRestart] = useState(false);
  const [imageUrl, setimageUrl] = useState('');
  const [fileName, setfileName] = useState('');
  const [fileType, setfileType] = useState('');
  const [swatchOverlay, setswatchOverlay] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor =
      introColors[Math.floor(Math.random() * introColors.length)];
  }, [restart]);

  const handleRestart = () => {
    setRestart(!restart);
    setimageUrl('');
    setfileName('');
    setfileType('');
    setcolors([]);
    setRestart(!restart);
  };

  const useRandomImage = async () => {
    try {
      const getImage = await axios.get('https://source.unsplash.com/random');
      setimageUrl(getImage.request.responseURL);
    } catch (error) {
      console.error(error);
    }
  };

  const useUploadedImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setimageUrl(URL.createObjectURL(file));
      setfileType(file.type);
      setfileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const extractColors = () => {
    if (imageUrl) {
      return <ColorExtractor src={imageUrl} getColors={handleColors} />;
    }
  };

  const handleColors = (colors) => {
    setcolors([...colors, ...colors]);
    document.body.style.backgroundColor = colors[0];
  };

  const renderSwatches = () => {
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
  };

  const swatchOverlaySwitch = () => {
    swatchOverlay ? setswatchOverlay(false) : setswatchOverlay(true);
  };

  return (
    <div className="app">
      {!imageUrl && (
        <div className="intro">
          <SplashScreen useRandomImage={useRandomImage} />

          <input
            className="file-input"
            type="file"
            id="file"
            onChange={useUploadedImage}
          />
          <label htmlFor="file">choose a file</label>
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
