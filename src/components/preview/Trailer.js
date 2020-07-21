import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Trailer = ({ url }) => {
  return (
    <div className="c-trailer__preview">
      <ReactPlayer
        className="c-trailer__preview-media"
        height="100%"
        url={url}
        width="100%"
      />
    </div>
  );
};

export default Trailer;
