import React, { useContext } from 'react';
import { Pods } from '../../contexts/StorefrontContext';

const PodHeader = ({ id }) => {
  const podsState = useContext(Pods);
  const { podUpdater } = podsState;

  const movePodDown = () => podUpdater({ type: 'MOVE_POD_DOWN', pod: id });
  const movePodUp = () => podUpdater({ type: 'MOVE_POD_UP', pod: id });
  const removePod = () => podUpdater({ type: 'REMOVE_POD', pod: id });

  return (
    <header className="c-media__header">
      <button className="c-media__move-up" onClick={() => movePodUp(id)} />
      <button className="c-media__move-down" onClick={() => movePodDown(id)} />
      <span className="c-media__drag-label">Drag to re-order</span>
      <button className="c-media__remove" onClick={() => removePod(id)}>
        ×
      </button>
    </header>
  );
};

export default PodHeader;
