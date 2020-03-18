import React, { useState, useEffect } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import axios from 'axios';

import { introColors } from './Constants';
import RestartButton from './Components/RestartButton';
import Swatches from './Components/Swatches';
import SplashScreen from './Components/SplashScreen';
import Input from './Components/Input';

import './App.css';

// import { AppContext } from './Context/AppContext';
// const Context = useContext(AppContext);

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

  const extractColors = () => {
    if (imageUrl) {
      return <ColorExtractor src={imageUrl} getColors={handleColors} />;
    }
  };

  const handleColors = (colors) => {
    setcolors([...colors, ...colors]);
    document.body.style.backgroundColor = colors[0];
  };

  return (
    <div className="app">
      {!imageUrl && (
        <div className="intro">
          <SplashScreen useRandomImage={useRandomImage} />
          <Input useUploadedImage={useUploadedImage} />
        </div>
      )}

      {extractColors()}

      {colors.length > 0 ? (
        <div>
          <div className="img-preview">
            <img src={imageUrl} alt={fileName} />
          </div>
          <Swatches colors={colors} />
          <RestartButton handleRestart={handleRestart} />
        </div>
      ) : null}
    </div>
  );
}
