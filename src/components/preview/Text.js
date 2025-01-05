import React from 'react';
import cx from 'classnames';
import ReactMarkdown from 'react-markdown';

const Text = ({ text }) => {
  return (
    <ReactMarkdown
      source={text}
      className={cx('gp-media__text', 'is-selectable', 'c-local-reset')}
    />
  );
};

export default Text;
