import React, { useState } from 'react';
import Header from './components/shared/Header';
import Customize from './Customize';
import Preview from './Preview';
import { PodsProvider } from './contexts/StorefrontContext';

const GamePage = () => {
  const [background, setBackground] = useState({ name: 'waves.mp4', data: '/public/waves.mp4', type: 'video/mp4' });
  const [preview, setPreview] = useState(false);
  const togglePreview = () => setPreview(!preview);

  return (
    <PodsProvider>
      <div className={`u-custom ${preview ? 'is-preview' : null}`}>
        <Header preview={preview} toggleAction={togglePreview} />
        {preview ?
          <Preview background={background} />
          :
          <Customize background={background} setBackground={setBackground} />
        }
      </div>
    </PodsProvider>
  );
}

export default GamePage;
