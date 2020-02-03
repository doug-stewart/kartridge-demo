import React from 'react';

const GalleryImage = ({ image, removeImage }) => {
  return (
    <li className="c-media__art">
      <button className="c-media__art-remove" onClick={removeImage}>
        ×
      </button>
      <span className="c-media__art-box">
        <img alt="" src={image} className="c-media__art-img" />
      </span>
    </li>
  )
}

export default GalleryImage;
