import React from 'react';
import Modal from 'react-modal';
import cx from 'classnames';

const GalleryModal = ({
  buttonClass,
  children,
  innerClass,
  openState,
  outerClass,
  toggleCallback,
}) => {
  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={openState}
      onRequestClose={toggleCallback}
      className={cx('c-modal__inner', innerClass)}
      overlayClassName={cx('c-modal__outer', outerClass)}>
      <button
        className={cx('c-modal__btn', buttonClass)}
        onClick={toggleCallback}>
        ×
      </button>
      {children}
    </Modal>
  );
};

export default GalleryModal;
