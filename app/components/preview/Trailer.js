import React from 'react';
import YouTube from 'react-youtube';
import { YouTubeId } from '../../helpers/YouTubeId';

const Trailer = ({ url }) => {
  const id = YouTubeId(url);

  return (
    <YouTube containerClassName="gp-media__trailer" videoId={id} />
  )
}

export default Trailer;
