import React from 'react';
import Modal from '../shared/Modal';

const GalleryModal = ({ image, isOpen, closeModal }) => {
  return (
    <Modal
      buttonClass="m-media__close"
      innerClass="m-media__art"
      openState={isOpen}
      toggleCallback={closeModal}>
      <img
        alt="Large Pine screenshot"
        src={image}
        className="m-media__screenshot"
      />
    </Modal>
  );
};

export default GalleryModal;
