import clsx from 'clsx';
import { useEffect, useRef } from 'react';

import type { MediaObj } from '../types';

type BackgroundMedia = {
    background: MediaObj;
};

const BackgroundMedia = ({ background }: BackgroundMedia) => {
    const backgroundVideo = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (background.data !== '' && background.type.includes('video')) {
            const video = backgroundVideo.current;

            if (!video) return;

            video.pause();
            video.muted = true;
            video.currentTime = 0;
            video.play();
        }
    }, [background.data, background.type]);

    return (
        <div className={clsx('c-feat-pg__bg', 'c-feat-pg__bg-image')}>
            <div className="c-feat-pg__overlay" />
            {background.type.includes('video') && (
                <video
                    autoPlay
                    className="c-feat-pg__bg-vid"
                    data-testid="background-video"
                    disableRemotePlayback
                    loop
                    muted
                    playsInline
                    preload="none"
                    ref={backgroundVideo}
                    src={background.data}
                />
            )}
            {background.type.includes('image') && (
                <img
                    alt=""
                    className="c-feat-pg__bg-vid"
                    data-testid="background-image"
                    src={background.data}
                />
            )}
            {background.type === '' && (
                <img
                    alt=""
                    className="c-feat-pg__bg-vid"
                    data-testid="background-icon"
                    src="/game/game-icon.png"
                />
            )}
        </div>
    );
};

export default BackgroundMedia;
