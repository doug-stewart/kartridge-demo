import React, { useContext } from 'react';
import { Modal } from '../../contexts/ModalContext';
import { Pods } from '../../contexts/StorefrontContext';
import ModalContainer from '../../ModalContainer';
import MarkdownModal from '../customize/MarkdownModal';
import PodHeader from './PodHeader';

const TextPod = ({ podId }) => {
  const modalState = useContext(Modal);
  const { modalUpdater } = modalState;
  const podsState = useContext(Pods);
  const { podUpdater } = podsState;
  const textPod = podsState.state.items[podId];
  const modal = modalState.state;

  const updateText = (pod, text) => podUpdater({ type: 'UPDATE_TEXT', pod: pod, text: text });
  const toggleModal = () => modalUpdater({ type: 'TOGGLE', id: 'markdown-guide' });

  return (
    <li className="c-media__container c-media__text">
      <PodHeader id={podId} />
      <label htmlFor={`text-${podId}`} className="c-media__text-group">
        <textarea className="c-media__text-input" id={`text-${podId}`} style={{ height: '94px', overflow: 'hidden' }} onChange={(event) => updateText(podId, event.target.value)} value={textPod.text} />
        <span className="c-media__text-help">
          <span className="c-media__text-bold">**bold**</span>
          <span className="c-media__text-italic">_italic_</span>
          <span className="c-media__text-list">- list</span>
          <span className="c-media__text-link">[text](https://www.kartridge.com/)</span>
          <button className="c-media__text-guide" onClick={toggleModal}>
            Markdown Help
          </button>
        </span>
      </label>
      {modal.showModal && modal.id === 'markdown-guide' ? (
        <ModalContainer>
          <MarkdownModal closeModal={toggleModal} />
        </ModalContainer>
      ) : null}
    </li>
  );
};

export default TextPod;
