import type { GalleryPod } from '../types';

type GalleryImageProps = {
    pod: GalleryPod;
    image: string;
    id: number;
    removeImage: (pod: GalleryPod, id: number) => void;
};

const GalleryImage = ({ pod, image, id, removeImage }: GalleryImageProps) => {
    return (
        <li className="c-media__art">
            <button
                className="c-media__art-remove"
                onClick={() => removeImage(pod, id)}
                title="Remove screenshot"
            >
                ×
            </button>
            <span className="c-media__art-box">
                <img alt="" src={image} className="c-media__art-img" />
            </span>
        </li>
    );
};

export default GalleryImage;
