import Modal from './Modal';

type GalleryModalProps = {
    image: string;
    isOpen: boolean;
    closeModal: () => void;
};

const GalleryModal = ({ image, isOpen, closeModal }: GalleryModalProps) => {
    return (
        <Modal
            buttonClass="m-media__close"
            innerClass="m-media__art"
            openState={isOpen}
            toggleCallback={closeModal}
        >
            <img alt="Large Pine screenshot" src={image} className="m-media__screenshot" />
        </Modal>
    );
};

export default GalleryModal;
