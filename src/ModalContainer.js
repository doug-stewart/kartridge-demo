import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, close }) => {
  return createPortal(
    <div role="dialog" className="c-modal">
      <div className="c-modal__inner">
        {children}
        <div
          className="c-modal__overlay"
          onClick={close}
          onKeyDown={(event) => {
            if (event.keyCode === 32) close();
          }}
          role="button"
          tabIndex="0"
        />
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
