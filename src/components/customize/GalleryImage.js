import React from 'react';

const GalleryImage = ({ pod, image, id, removeImage }) => {
  return (
    <li className="c-media__art">
      <button
        className="c-media__art-remove"
        onClick={() => removeImage(pod, id)}
        title="Remove screenshot">
        ×
      </button>
      <span className="c-media__art-box">
        <img
          alt=""
          src={`${process.env.PUBLIC_URL + image}`}
          className="c-media__art-img"
        />
      </span>
    </li>
  );
};

export default GalleryImage;
