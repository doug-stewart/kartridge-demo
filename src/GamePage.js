import React, { useState } from 'react';
import classNames from 'classnames';
import Header from './components/shared/Header';
import Customize from './Customize';
import Preview from './Preview';
import { PodsProvider } from './contexts/StorefrontContext';

const GamePage = () => {
  const [background, setBackground] = useState({ name: 'background.mp4', data: '/game/background.mp4', type: 'video/mp4' });
  const [preview, setPreview] = useState(false);
  const togglePreview = () => setPreview(!preview);
  const customClasses = classNames('u-custom', { 'is-preview': preview });

  return (
    <PodsProvider>
      <div className={customClasses}>
        <Header preview={preview} toggleAction={togglePreview} />
        {preview ? <Preview background={background} /> : <Customize background={background} setBackground={setBackground} />}
      </div>
    </PodsProvider>
  );
};

export default GamePage;
