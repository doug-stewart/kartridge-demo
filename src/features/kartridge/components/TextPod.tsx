import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import type { Pod } from '../types';

import MarkdownModal from './MarkdownModal';

type TextPodProps = {
    pod: Pod;
    text: string;
    setText: (pod: Pod, text: string) => void;
};

const TextPod = ({ pod, text, setText }: TextPodProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <label htmlFor={`text-${pod}`} className="c-media__text-group">
            <TextareaAutosize
                className="c-media__text-input"
                id={`text-${pod}`}
                style={{ height: 94, overflow: 'hidden' }}
                onChange={(event) => setText(pod, event.target.value)}
                value={text}
            />
            <span className="c-media__text-help">
                <span className="c-media__text-bold">**bold**</span>
                <span className="c-media__text-italic">_italic_</span>
                <span className="c-media__text-list">- list</span>
                <span className="c-media__text-link">[text](https://www.kartridge.com/)</span>
                <button className="c-media__text-guide" onClick={() => setShowModal(true)}>
                    Markdown Help
                </button>
            </span>
            <MarkdownModal isOpen={showModal} closeModal={() => setShowModal(false)} />
        </label>
    );
};

export default TextPod;
