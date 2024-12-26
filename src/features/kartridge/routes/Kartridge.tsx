import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import AppFrame from '../components/AppFrame';
import AppHeader from '../components/AppHeader';
import AppNavigation from '../components/AppNavigation';
import AppTheme from '../components/AppTheme';
import Header from '../components/Header';
import { podsStore } from '../stores/pods.store';

import Customize from './Customize';
import Preview from './Preview';
import '../styles/kartridge.scss';

export const Kartridge = () => {
    const hasData = useRef(false);

    const [background, setBackground] = useState({
        name: 'background.mp4',
        data: '/game/background.mp4',
        type: 'video/mp4',
    });

    const [preview, setPreview] = useState(false);
    const togglePreview = () => setPreview(!preview);
    const customClasses = clsx('u-custom', { 'is-preview': preview });

    useEffect(() => {
        const getGame = async () =>
            await fetch('/game/data.json')
                .then((response) => response.json())
                .then((data) => podsStore.send({ type: 'set', pods: data }));

        if (hasData.current) return;
        hasData.current = true;
        getGame();
    }, []);

    return (
        <>
            <AppTheme />
            <AppFrame>
                <AppHeader />
                <AppNavigation />
                <div className="ap-content">
                    <main className="ap-main">
                        <div className={customClasses}>
                            <Header preview={preview} toggleAction={togglePreview} />
                            {preview ? (
                                <Preview background={background} />
                            ) : (
                                <Customize background={background} setBackground={setBackground} />
                            )}
                        </div>
                    </main>
                </div>
            </AppFrame>
        </>
    );
};
