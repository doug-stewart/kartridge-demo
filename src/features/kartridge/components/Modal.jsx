import clsx from 'clsx';
import React from 'react';
import Modal from 'react-modal';

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
            className={clsx('c-modal__inner', innerClass)}
            overlayClassName={clsx('c-modal__outer', outerClass)}
        >
            <button className={clsx('c-modal__btn', buttonClass)} onClick={toggleCallback}>
                ×
            </button>
            {children}
        </Modal>
    );
};

export default GalleryModal;
