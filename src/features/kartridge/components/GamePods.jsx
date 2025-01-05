import clsx from 'clsx';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { Pods } from '../contexts/StorefrontContext';

import GalleryPod from './GalleryPod';
import GamePod from './GamePod';
import TextPod from './TextPod';
import TrailerPod from './TrailerPod';

const GamePods = () => {
    const podsState = useContext(Pods);
    const { podUpdater } = podsState;
    const podArea = useRef();

    const [kind, setKind] = useState('');
    const [adding, setAdding] = useState(false);
    const [dragging, setDragging] = useState(false);

    const addPod = () => {
        podUpdater({ type: `ADD_${kind.toUpperCase()}` });
        setAdding(true);
    };

    const reorderPods = (pods) => podUpdater({ type: 'SET_PODS', data: pods.items });

    const movePodDown = (pod) =>
        podUpdater({
            type: 'MOVE_POD_DOWN',
            pod: pod,
        });

    const movePodUp = (pod) =>
        podUpdater({
            type: 'MOVE_POD_UP',
            pod: pod,
        });

    const removePod = (pod) =>
        podUpdater({
            type: 'REMOVE_POD',
            pod: pod,
        });

    const setLayout = (pod, layout) => podUpdater({ type: 'SET_LAYOUT', pod: pod, layout: layout });

    const setImages = (pod, images) => podUpdater({ type: 'SET_IMAGES', pod: pod, images: images });

    const addImage = (pod, data) => podUpdater({ type: 'ADD_IMAGE', pod: pod, image: data });

    const removeImage = (pod, image) =>
        podUpdater({ type: 'REMOVE_IMAGE', pod: pod, image: image });

    const setText = (pod, text) => podUpdater({ type: 'SET_TEXT', pod: pod, text: text });

    const setTrailer = (pod, url) => podUpdater({ type: 'SET_TRAILER', pod: pod, url: url });

    useEffect(() => {
        if (adding) {
            podArea.current.scrollTo({
                top: podArea.current.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
            setAdding(false);
        }
    }, [adding]);

    return (
        <div className="c-feat-pg__sections" ref={podArea}>
            <div
                className={clsx('c-feat-pg__sections-inner', 'gp-body', {
                    'u-custom--dragging': dragging,
                })}
            >
                <span className={clsx('c-key__group', 'u-custom__sections-keys')}>
                    <span className={clsx('c-key', 'c-key--d')}>
                        <span className="c-key__color"> </span>
                        <span className="c-key__label">D</span>
                    </span>
                    <span className={clsx('c-key', 'c-key--e')}>
                        <span className="c-key__color">Text</span>
                        <span className="c-key__label">E</span>
                    </span>
                    <span className={clsx('c-key', 'c-key--f')}>
                        <span className="c-key__color">Highlight Text</span>
                        <span className="c-key__label">F</span>
                    </span>
                </span>
                <div className="c-media__add">
                    <select
                        className="c-media__add-choice"
                        onBlur={(event) => setKind(event.target.value)}
                        onChange={(event) => setKind(event.target.value)}
                    >
                        <option value="">Choose content to add…</option>
                        <option value="trailer">Video Pod</option>
                        <option value="gallery">Gallery Pod</option>
                        <option value="text">Text Pod</option>
                    </select>
                    {kind !== '' && (
                        <button
                            className={clsx('c-media__add-btn', 'btn--red', 'btn--m')}
                            onClick={addPod}
                        >
                            Add
                        </button>
                    )}
                </div>
                {podsState.state.length > 0 ? (
                    <ReactSortable
                        className={clsx('u-custom__gallery', 'c-media')}
                        handle=".c-media__drag-label"
                        list={podsState.state}
                        onEnd={() => setDragging(false)}
                        onStart={() => setDragging(true)}
                        setList={(items) => reorderPods({ items })}
                        tag="ul"
                    >
                        {podsState.state.map((pod, index) => (
                            <GamePod
                                key={pod.id}
                                isFirst={index === 0}
                                isLast={index === podsState.state.length - 1}
                                pod={pod.id}
                                podClass={`c-media__${pod.type}`}
                                movePodDown={movePodDown}
                                movePodUp={movePodUp}
                                removePod={removePod}
                            >
                                {pod.type === 'gallery' ? (
                                    <GalleryPod
                                        pod={pod.id}
                                        images={pod.images}
                                        layout={pod.layout}
                                        setLayout={setLayout}
                                        setImages={setImages}
                                        addImage={addImage}
                                        removeImage={removeImage}
                                    />
                                ) : pod.type === 'text' ? (
                                    <TextPod pod={pod.id} text={pod.text} setText={setText} />
                                ) : pod.type === 'trailer' ? (
                                    <TrailerPod
                                        pod={pod.id}
                                        url={pod.url}
                                        setTrailer={setTrailer}
                                    />
                                ) : null}
                            </GamePod>
                        ))}
                    </ReactSortable>
                ) : (
                    <div className={clsx('u-custom__gallery', 'c-media')}>
                        <div className="u-custom__empty-gallery">
                            <div className="gp-media__trailer" />
                            <div className={clsx('gp-media__text', 'c-local-reset')}>
                                <p />
                                <p />
                                <p />
                                <p />
                                <p />
                            </div>
                            <div>
                                <div className={clsx('c-media__artwork', 'c-media__artwork--x2')}>
                                    <div className="c-media__art" />
                                    <div className="c-media__art" />
                                    <div className="c-media__art" />
                                    <div className="c-media__art" />
                                    <div className="c-media__art" />
                                    <div className="c-media__art" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePods;
