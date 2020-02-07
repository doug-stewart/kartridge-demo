import React, { useContext, useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs-typescript';
import { Pods } from '../../contexts/StorefrontContext';
import GalleryPod from './GalleryPod';
import TextPod from './TextPod';
import TrailerPod from './TrailerPod';

const GamePods = () => {
  const podsState = useContext(Pods);
  const allPods = podsState.state.items;
  const { podUpdater } = podsState;
  const podArea = useRef();

  const [kind, setKind] = useState('');
  const [adding, setAdding] = useState(false);
  const [dragging, setDragging] = useState(false);

  const reorderPods = pods => podUpdater({ type: 'reorderPods', pods: pods });

  const addPod = () => {
    podUpdater({ type: 'addPod', kind: kind });
    setAdding(true);
  };

  useEffect(() => {
    if (adding) {
      podArea.current.scrollTo({ top: podArea.current.scrollHeight, left: 0, behavior: 'smooth' });
      setAdding(false);
    }
  }, [adding]);

  return (
    <div className="c-feat-pg__sections" ref={podArea}>
      <div className={`c-feat-pg__sections-inner gp-body ${dragging ? 'u-custom--dragging' : null}`}>
        <span className="c-key__group u-custom__sections-keys">
          <span className="c-key c-key--d">
            <span className="c-key__color"> </span>
            <span className="c-key__label">D</span>
          </span>
          <span className="c-key c-key--e">
            <span className="c-key__color">Text</span>
            <span className="c-key__label">E</span>
          </span>
          <span className="c-key c-key--f">
            <span className="c-key__color">Highlight Text</span>
            <span className="c-key__label">F</span>
          </span>
        </span>
        <div className="c-media__add">
          {/* eslint-disable-next-line jsx-a11y/no-onchange */}
          <select className="x-select c-media__add-choice" onChange={event => setKind(event.target.value)}>
            <option value="" className="x-option is-selected">
              Choose content to add…
            </option>
            <option value="trailer" className="x-option">
              Video
            </option>
            <option value="gallery" className="x-option">
              Image Gallery
            </option>
            <option value="text" className="x-option">
              Text
            </option>
          </select>
          {kind !== '' && (
            <button className="c-media__add-btn btn--red btn--m" onClick={addPod}>
              Add
            </button>
          )}
        </div>
        {allPods.length > 0 ? (
          <ReactSortable className="u-custom__gallery c-media" handle=".c-media__drag-label" list={allPods} onEnd={() => setDragging(false)} onStart={() => setDragging(true)} setList={items => reorderPods({ items })} tag="ul">
            {allPods.map((pod, id) => {
              if (pod.type === 'gallery') {
                return <GalleryPod key={id} podId={id} />;
              }
              if (pod.type === 'trailer') {
                return <TrailerPod key={id} podId={id} />;
              }
              if (pod.type === 'text') {
                return <TextPod key={id} podId={id} />;
              }
            })}
          </ReactSortable>
        ) : (
          <div className="u-custom__gallery c-media">
            <div className="u-custom__empty-gallery">
              <div className="gp-media__trailer" />
              <div className="gp-media__text c-local-reset">
                <p />
                <p />
                <p />
                <p />
                <p />
              </div>
              <div>
                <div className="c-media__artwork c-media__artwork--x2">
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
