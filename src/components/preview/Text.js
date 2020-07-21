import React from 'react';
import ReactMarkdown from 'react-markdown';

const Text = ({ text }) => {
  return (
    <ReactMarkdown
      source={text}
      className="gp-media__text is-selectable c-local-reset"
    />
  );
};

export default Text;
