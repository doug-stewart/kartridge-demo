import clsx from 'clsx';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import type { Pod } from '../types';

type TrailerPodProps = {
    pod: Pod;
    url: string;
    setTrailer: (pod: Pod, url: string) => void;
};

const TrailerPod = ({ pod, url, setTrailer }: TrailerPodProps) => {
    const [hasError, setHasError] = useState(false);
    const [wasInteracted, setWasInteracted] = useState(false);

    const updateTrailer = (newUrl: string) => {
        const validator = newUrl.match(
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/,
        );
        const valid = validator && validator[2].length === 11;
        setHasError(!valid);
        setTrailer(pod, newUrl);
    };

    return (
        <>
            <div className="c-trailer__form">
                <label htmlFor={`youtube-input-${pod}`} className="c-trailer__label">
                    Add a video, such as a trailer or interview
                    <em className="c-trailer__note">
                        Youtube URL — Make sure you disable ads on your video
                    </em>
                </label>
                <input
                    className="c-trailer__url"
                    id={`youtube-input-${pod}`}
                    onBlur={() => setWasInteracted(true)}
                    onChange={(event) => updateTrailer(event.target.value)}
                    placeholder="Enter YouTube video URL"
                    type="text"
                    value={url}
                />
                {hasError && wasInteracted && (
                    <ul
                        className={clsx(
                            'c-validation__list',
                            'c-trailer__form-errors',
                            'has-errors',
                        )}
                    >
                        <li className="c-validation__item">Must be a valid YouTube URL</li>
                    </ul>
                )}
            </div>
            {!hasError && url && (
                <div className="c-trailer__preview">
                    <ReactPlayer
                        className="c-trailer__preview-media"
                        height="100%"
                        url={url}
                        width="100%"
                    />
                </div>
            )}
        </>
    );
};

export default TrailerPod;
