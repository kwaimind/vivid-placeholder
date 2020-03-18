import React, { useState, useEffect } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

import AppContext from './Context/AppContext';
import { introColors } from './Constants';
import RestartButton from './Components/RestartButton';
import Swatches from './Components/Swatches';
import SplashScreen from './Components/SplashScreen';
import Input from './Components/Input';

import './App.css';

export default function App() {
  const [colors, setcolors] = useState([]);
  const [restart, setRestart] = useState(false);
  const [imageUrl, setimageUrl] = useState('');
  const [fileName, setfileName] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor =
      introColors[Math.floor(Math.random() * introColors.length)];
  }, [restart]);

  const handleRestart = () => {
    setRestart(!restart);
    setimageUrl('');
    setfileName('');
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
      setfileName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleColors = (colors) => {
    setcolors([...colors, ...colors]);
    document.body.style.backgroundColor = colors[0];
  };

  return (
    <AppContext.Provider value={colors}>
      <div className="app">
        {!imageUrl && (
          <div className="intro">
            <SplashScreen useRandomImage={useRandomImage} />
            <Input useUploadedImage={useUploadedImage} />
          </div>
        )}

        {imageUrl && <ColorExtractor src={imageUrl} getColors={handleColors} />}

        {colors.length > 0 && (
          <div>
            <div className="img-preview">
              <img src={imageUrl} alt={fileName} />
            </div>
            <Swatches />
            <RestartButton handleRestart={handleRestart} />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}
