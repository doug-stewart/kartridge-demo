import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import Header from '../components/Header';
import { Pods } from '../contexts/StorefrontContext';

import Customize from './Customize';
import Preview from './Preview';

const GamePage = () => {
    const podsState = useContext(Pods);
    const { podUpdater } = podsState;
    const [hasData, setHasData] = useState(false);
    const [background, setBackground] = useState({
        name: 'background.mp4',
        data: '/game/background.mp4',
        type: 'video/mp4',
    });
    const [preview, setPreview] = useState(false);
    const togglePreview = () => setPreview(!preview);
    const customClasses = clsx('u-custom', { 'is-preview': preview });

    useEffect(() => {
        if (hasData) return;
        fetch('/game/data.json')
            .then((response) => response.json())
            .then((data) => {
                podUpdater({ type: 'SET_PODS', data: data });
                setHasData(true);
            });
    }, [hasData, podUpdater]);

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
