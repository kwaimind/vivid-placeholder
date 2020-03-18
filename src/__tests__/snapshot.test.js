import React from 'react';
import renderer from 'react-test-renderer';
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

describe('The components match the previous snapshot', () => {
  it('<App />', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<Input />', () => {
    const tree = renderer
      .create(<Input useUploadedImage={fakeFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<RestartButton />', () => {
    const tree = renderer
      .create(<RestartButton handleRestart={fakeFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SplashScreen />', () => {
    const tree = renderer
      .create(<SplashScreen useRandomImage={fakeFunc} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<Swatches />', () => {
    const tree = renderer.create(<Swatches />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SwatchButton />', () => {
    const tree = renderer
      .create(
        <SwatchButton
          actions={{ showSwatches: fakeFunc, setShowSwatches: fakeFunc }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('<SwatchPicker />', () => {
    const tree = renderer.create(<SwatchPicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
