import React, { useEffect, useRef } from 'react';

const BackgroundMedia = ({ background }) => {
  const backgroundVideo = useRef();

  useEffect(() => {
    if (background.data !== '' && background.type.includes('video')) {
      const video = backgroundVideo.current;

      video.pause();
      video.muted = true;
      video.currentTime = 0;
      video.play();
    };
  }, [background.data, background.type]);

  return (
    <div className="c-feat-pg__bg c-feat-pg__bg-image">
      <div className="c-feat-pg__overlay" />
      {background.type.includes('video') &&
        <video
          autoPlay
          className="c-feat-pg__bg-vid"
          disableremoteplayback=""
          loop
          muted
          playsInline
          preload="none"
          ref={backgroundVideo}
          src={background.data}
        />
      }
      {background.type.includes('image') &&
        <img alt="" src={background.data} className="c-feat-pg__bg-vid" />
      }
      {background.type === '' &&
        <img alt="" src="http://www.placekitten.com/500/400" className="c-feat-pg__bg-vid" />
      }
    </div>
  )
}

export default BackgroundMedia;
