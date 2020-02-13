import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  return createPortal(
    <div className="c-modal">
      <div className="c-modal__inner">
        {children}
        <div className="c-modal__overlay" />
      </div>
    </div>,
    document.getElementById('modal')
  )
};

export default Modal;
