import React, { useContext } from 'react';
import { Pods } from '../../contexts/StorefrontContext';
import PodHeader from './PodHeader';
import YouTube from 'react-youtube';
import { YouTubeId } from '../../helpers/YouTubeId';

const TrailerPod = ({ podId }) => {
  const podsState = useContext(Pods);
  const { podUpdater } = podsState;
  const youTubePod = podsState.state.items[podId];
  const videoId = YouTubeId(youTubePod.url);

  const updateTrailer = (pod, url) => podUpdater({ type: 'updateTrailer', pod: pod, url: url });

  return (
    <li className="c-media__container c-media__video">
      <PodHeader id={podId} />
      <div className="c-trailer__form">
        <label htmlFor={`youtube-input-${podId}`} className="c-trailer__label">
          Add a video, such as a trailer or interview
          <em className="c-trailer__note">Youtube URL — Make sure you disable ads on your video</em>
        </label>
        <input className="c-trailer__url" id={`youtube-input-${podId}`} onChange={event => updateTrailer(podId, event.target.value)} type="text" value={youTubePod.url} />
        {videoId === null && (
          <ul className="c-validation__list c-trailer__form-errors has-errors">
            <li className="c-validation__item">Must be a valid YouTube URL</li>
          </ul>
        )}
      </div>
      {videoId && <YouTube containerClassName="c-trailer__preview" className="c-trailer__preview-media" videoId={videoId} />}
    </li>
  );
};

export default TrailerPod;
