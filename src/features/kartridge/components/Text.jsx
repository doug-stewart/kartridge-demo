import clsx from 'clsx';
import React from 'react';
import Markdown from 'react-markdown';

const Text = ({ text }) => (
    <div className={clsx('gp-media__text', 'is-selectable', 'c-local-reset')}>
        <Markdown>{text}</Markdown>
    </div>
);

export default Text;
