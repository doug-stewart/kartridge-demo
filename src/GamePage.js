import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { Pods } from './contexts/StorefrontContext';
import Header from './components/shared/Header';
import Customize from './Customize';
import Preview from './Preview';

const GamePage = () => {
  const json = '/game/data.json';
  const podsState = useContext(Pods);
  const { podUpdater } = podsState;
  const [background, setBackground] = useState({
    name: 'background.mp4',
    data: '/game/background.mp4',
    type: 'video/mp4',
  });
  const [preview, setPreview] = useState(false);
  const togglePreview = () => setPreview(!preview);
  const customClasses = cx('u-custom', { 'is-preview': preview });

  useEffect(() => {
    fetch(json)
      .then((response) => response.json())
      .then((data) => {
        podUpdater({ type: 'SET_PODS', data: data });
      });
  }, [podUpdater]);

  return (
    <div className={customClasses}>
      <Header preview={preview} toggleAction={togglePreview} />
      {preview ? (
        <Preview background={background} />
      ) : (
        <Customize background={background} setBackground={setBackground} />
      )}
    </div>
  );
};

export default GamePage;
