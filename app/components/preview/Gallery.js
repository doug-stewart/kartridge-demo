import React, { useContext, useState } from 'react';
import { Modal } from '../../contexts/ModalContext';
import ModalContainer from '../../ModalContainer';

const Gallery = ({ layout, images }) => {
  const modalState = useContext(Modal);
  const { modalUpdater } = modalState;
  const [image, setImage] = useState('');
  const modal = modalState.state;

  const toggleModal = image => {
    modalUpdater({ type: 'toggle', id: image });
    setImage(image);
  };

  return (
    <>
      <ul className={`c-media__artwork c-media__artwork--x${layout}`}>
        {images.map((image, id) => (
          <li key={id} className="c-media__art">
            <button className="c-media__art-box" title="View screenshot" onClick={() => toggleModal(image)}>
              <img alt="Pine screenshot" src={image} className="c-media__art-img" />
            </button>
          </li>
        ))}
      </ul>
      {modal.showModal && modal.id === image ? (
        <ModalContainer>
          <div className="m-media__outer">
            <div className="m-media__art">
              <button className="m-media__close" onClick={toggleModal}>
                ×
              </button>
              <img alt="" src={image} className="m-media__screenshot" />
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Gallery;
