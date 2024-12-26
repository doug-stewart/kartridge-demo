import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Modal from 'react-modal';

type GalleryModalProps = PropsWithChildren & {
    buttonClass?: string;
    innerClass?: string;
    openState: boolean;
    outerClass?: string;
    toggleCallback: () => void;
};

const GalleryModal = ({
    buttonClass,
    children,
    innerClass,
    openState,
    outerClass,
    toggleCallback,
}: GalleryModalProps) => {
    const root = document.getElementById('root');

    return root ? (
        <Modal
            appElement={root}
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
    ) : (
        <></>
    );
};

export default GalleryModal;
