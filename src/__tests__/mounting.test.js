import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Input from '../Components/Input';
import RestartButton from '../Components/RestartButton';
import SplashScreen from '../Components/SplashScreen';
import SwatchButton from '../Components/SwatchButton';
import Swatches from '../Components/Swatches';
import SwatchPicker from '../Components/SwatchPicker';

const fakeFunc = () => {
  return;
};

describe('The components mount with no errors', () => {
  it('<App /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Input /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input useUploadedImage={fakeFunc} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<RestartButton /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RestartButton handleRestart={fakeFunc} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<SplashScreen /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SplashScreen useRandomImage={fakeFunc} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Swatches /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Swatches />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<SwatchButton /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwatchButton actions={fakeFunc} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<SwatchPicker /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwatchPicker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
