import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import AppFrame from '../components/AppFrame';
import AppHeader from '../components/AppHeader';
import AppNavigation from '../components/AppNavigation';
import AppTheme from '../components/AppTheme';
import Header from '../components/Header';
import { usePodsStore } from '../stores/pods.store';
import type { GalleryObj, PodObj } from '../types';

import '../styles/kartridge.scss';
import Customize from './Customize';
import Preview from './Preview';

export const Kartridge = () => {
    const hasData = useRef(false);
    const setPods = usePodsStore((state) => state.setPods);

    const [background, setBackground] = useState({
        name: 'background.mp4',
        data: `${import.meta.env.BASE_URL}game/background.mp4`,
        type: 'video/mp4',
    });

    const [preview, setPreview] = useState(false);
    const togglePreview = () => setPreview(!preview);
    const customClasses = clsx('u-custom', { 'is-preview': preview });

    useEffect(() => {
        const getGame = async () =>
            await fetch(`${import.meta.env.BASE_URL}game/data.json`)
                .then((response) => response.json())
                .then((data: PodObj[]) => {
                    const fixedData = data.map((pod) => {
                        if (pod.type === 'gallery') {
                            const galleryPod = pod as GalleryObj;
                            return {
                                ...galleryPod,
                                images: galleryPod.images.map((img) => ({
                                    ...img,
                                    image: img.image.startsWith('/')
                                        ? `${import.meta.env.BASE_URL}${img.image.slice(1)}`
                                        : img.image,
                                })),
                            };
                        }
                        return pod;
                    });
                    setPods(fixedData);
                });

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
