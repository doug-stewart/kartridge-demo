import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = PropsWithChildren & {
    close: (value: boolean) => void;
};

const Modal = ({ children, close }: ModalProps) => {
    return createPortal(
        <div role="dialog" className="c-modal">
            <div className="c-modal__inner">
                {children}
                <div
                    className="c-modal__overlay"
                    onClick={() => close(false)}
                    onKeyDown={(event) => {
                        if (event.keyCode === 32) close(false);
                    }}
                    role="button"
                    tabIndex={0}
                />
            </div>
        </div>,
        document.getElementById('modal') || document.body,
    );
};

export default Modal;
