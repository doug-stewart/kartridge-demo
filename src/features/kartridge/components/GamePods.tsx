import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { usePodsStore } from '../stores/pods.store';
import type { GalleryObj, ImageObj, PodObj, PodsArr } from '../types';

import GalleryPod from './GalleryPod';
import GamePod from './GamePod';
import TextPod from './TextPod';
import TrailerPod from './TrailerPod';

const GamePods = () => {
    const pods = usePodsStore((state) => state.pods);

    const addPodToStore = usePodsStore((state) => state.addPod);
    const setPods = usePodsStore((state) => state.setPods);
    const movePodDownStore = usePodsStore((state) => state.movePodDown);
    const movePodUpStore = usePodsStore((state) => state.movePodUp);
    const removePodStore = usePodsStore((state) => state.removePod);
    const updatePodStore = usePodsStore((state) => state.updatePod);

    const podArea = useRef<HTMLDivElement | null>(null);

    const [kind, setKind] = useState<PodObj['type'] | ''>('');
    const [adding, setAdding] = useState(false);
    const [dragging, setDragging] = useState(false);

    const addPod = (kind: PodObj['type']) => {
        const pod = { type: kind };

        if (kind === 'gallery') {
            Object.assign(pod, { images: [], layout: 3 });
        }

        if (kind === 'text') {
            Object.assign(pod, { text: '' });
        }

        if (kind === 'trailer') {
            Object.assign(pod, { url: '' });
        }

        addPodToStore(pod as PodObj);
        setAdding(true);
    };

    const reorderPods = (pods: PodsArr) => setPods(pods);
    const movePodDown = (pod: PodObj) => movePodDownStore(pod.id);
    const movePodUp = (pod: PodObj) => movePodUpStore(pod.id);
    const removePod = (pod: PodObj) => removePodStore(pod.id);

    const setLayout = (pod: PodObj, layout: GalleryObj['layout']) =>
        updatePodStore(Object.assign(pod, { layout }));

    const setImages = (pod: PodObj, images: GalleryObj['images']) =>
        updatePodStore(Object.assign(pod, { images }));

    const addImage = (pod: GalleryObj, data: ImageObj) => {
        updatePodStore(Object.assign(pod, { images: [...pod.images, data] }));
    };

    const removeImage = (pod: GalleryObj, id: number) =>
        updatePodStore(
            Object.assign(pod, { images: pod.images.filter((image) => image.id !== id) }),
        );

    const setText = (pod: PodObj, text: string) => updatePodStore(Object.assign(pod, { text }));

    const setTrailer = (pod: PodObj, url: string) => updatePodStore(Object.assign(pod, { url }));

    useEffect(() => {
        if (adding && podArea.current) {
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
                        onBlur={(event) => setKind(event.target.value as PodObj['type'])}
                        onChange={(event) => setKind(event.target.value as PodObj['type'])}
                    >
                        <option value="">Choose content to add…</option>
                        <option value="trailer">Video Pod</option>
                        <option value="gallery">Gallery Pod</option>
                        <option value="text">Text Pod</option>
                    </select>
                    {kind !== '' && (
                        <button
                            type="button"
                            className={clsx('c-media__add-btn', 'btn--red', 'btn--m')}
                            onClick={() => addPod(kind)}
                        >
                            Add
                        </button>
                    )}
                </div>
                {pods.length > 0 ? (
                    <ReactSortable
                        className={clsx('u-custom__gallery', 'c-media')}
                        handle=".c-media__drag-label"
                        list={pods}
                        onEnd={() => setDragging(false)}
                        onStart={() => setDragging(true)}
                        setList={(items) => reorderPods(items)}
                        tag="ul"
                    >
                        {pods.map((pod, index) => (
                            <GamePod
                                key={pod.id}
                                isFirst={index === 0}
                                isLast={index === pods.length - 1}
                                pod={pod}
                                podClass={`c-media__${pod.type}`}
                                movePodDown={movePodDown}
                                movePodUp={movePodUp}
                                removePod={removePod}
                            >
                                {pod.type === 'gallery' ? (
                                    <GalleryPod
                                        pod={pod}
                                        images={pod.images}
                                        layout={pod.layout}
                                        setLayout={setLayout}
                                        setImages={setImages}
                                        addImage={addImage}
                                        removeImage={removeImage}
                                    />
                                ) : pod.type === 'text' ? (
                                    <TextPod pod={pod} text={pod.text} setText={setText} />
                                ) : pod.type === 'trailer' ? (
                                    <TrailerPod pod={pod} url={pod.url} setTrailer={setTrailer} />
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
