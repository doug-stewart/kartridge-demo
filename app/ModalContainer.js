import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modal = document.getElementById('modal');

const Modal = ({ children }) => {
  const content = useRef(null);
  if (!content.current) {
    content.current = document.createElement('div');
    content.current.className = 'c-modal';
  }

  useEffect(() => {
    modal.appendChild(content.current);
    return () => modal.removeChild(content.current);
  }, []);

  return createPortal(
    <div className="c-modal__inner">
      {children}
      <div className="c-modal__overlay" />
    </div>
    , content.current);
};

export default Modal;
