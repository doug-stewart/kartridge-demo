import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import MarkdownModal from '../customize/MarkdownModal';

const TextPod = ({ pod, text, setText }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <label htmlFor={`text-${pod}`} className="c-media__text-group">
      <TextareaAutosize
        className="c-media__text-input"
        id={`text-${pod}`}
        style={{ height: '94px', overflow: 'hidden' }}
        onChange={(event) => setText(pod, event.target.value)}
        value={text}
      />
      <span className="c-media__text-help">
        <span className="c-media__text-bold">**bold**</span>
        <span className="c-media__text-italic">_italic_</span>
        <span className="c-media__text-list">- list</span>
        <span className="c-media__text-link">
          [text](https://www.kartridge.com/)
        </span>
        <button
          className="c-media__text-guide"
          onClick={() => setShowModal(true)}>
          Markdown Help
        </button>
      </span>
      <MarkdownModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
      />
    </label>
  );
};

export default TextPod;
