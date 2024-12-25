import React, { useState } from 'react';

import GalleryModal from './GalleryModal';

const Gallery = ({ layout, images }) => {
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState('');

    const openModal = (src) => {
        setImage(src);
        setShowModal(true);
    };

    return (
        <>
            <ul className={`c-media__artwork c-media__artwork--x${layout}`}>
                {images.map((item) => (
                    <li key={item.image} className="c-media__art">
                        <button
                            className="c-media__art-box"
                            title="View screenshot"
                            onClick={() => openModal(item.image)}
                        >
                            <img
                                alt="Pine screenshot"
                                src={item.image}
                                className="c-media__art-img"
                            />
                        </button>
                    </li>
                ))}
            </ul>
            <GalleryModal image={image} isOpen={showModal} closeModal={() => setShowModal(false)} />
        </>
    );
};

export default Gallery;
