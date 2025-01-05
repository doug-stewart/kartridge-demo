import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

const BackgroundMedia = ({ background }) => {
    const backgroundVideo = useRef();

    useEffect(() => {
        if (background.data !== '' && background.type.includes('video')) {
            const video = backgroundVideo.current;

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
                    disableRemotePlayback=""
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
