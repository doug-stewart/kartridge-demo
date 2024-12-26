import { ReactSortable } from 'react-sortablejs';

import type {
    GalleryImage as GalleryImageType,
    GalleryPod as GalleryPodType,
    Media,
} from '../types';

import Dropzone from './Dropzone';
import GalleryImage from './GalleryImage';

type GalleryPodProps = {
    pod: GalleryPodType;
    images: any[];
    layout: number;
    setLayout: (pod: GalleryPodType, layout: GalleryPodType['layout']) => void;
    setImages: (pod: GalleryPodType, images: GalleryPodType['images']) => void;
    addImage: (pod: GalleryPodType, image: GalleryImageType) => void;
    removeImage: (pod: GalleryPodType, id: number) => void;
};

const GalleryPod = ({
    pod,
    images,
    layout,
    setLayout,
    setImages,
    addImage,
    removeImage,
}: GalleryPodProps) => {
    const columns = ['1', '2', '3'];
    const formats = ['jpeg', 'jpg', 'png', 'gif'];

    const isValidImage = (media: Media) =>
        formats.some((format) => media.type.toLowerCase().includes(format));

    const processUpload = (media: Media) => {
        if (!isValidImage(media)) return;
        const newImage: GalleryImageType = { id: pod.images.length + 1, image: media.data };
        addImage(pod, newImage);
    };

    const updateImages = (data: any) => {
        setImages(pod, data.items);
    };

    return (
        <>
            <p className="c-media__col-ctrl">
                <strong className="c-media__col-ctrl__title">Images Per Row:</strong>
                <select
                    className="c-media__col-ctrl__select"
                    value={layout}
                    onBlur={(event) =>
                        setLayout(pod, event.target.value as unknown as GalleryPodType['layout'])
                    }
                    onChange={(event) =>
                        setLayout(pod, event.target.value as unknown as GalleryPodType['layout'])
                    }
                >
                    {columns.map((column) => {
                        return (
                            <option key={column} value={column}>
                                {column} Image
                            </option>
                        );
                    })}
                </select>
            </p>
            <div className="c-media__artwork-cont">
                {images.length !== 0 && (
                    <ReactSortable
                        className={`c-media__artwork sortable-objects c-media__artwork--x${layout}`}
                        list={images}
                        setList={(items) => updateImages({ items })}
                        tag="ul"
                    >
                        {images.map((item) => {
                            return (
                                <GalleryImage
                                    key={item.id}
                                    id={item.id}
                                    pod={pod}
                                    image={item.image}
                                    removeImage={removeImage}
                                />
                            );
                        })}
                    </ReactSortable>
                )}
                <Dropzone classes="c-media__item-add" returner={processUpload}>
                    <span className="c-media__art-add">
                        <span className="c-media__art-add__label">
                            Drag and Drop / Select Image
                        </span>
                        <em className="c-media__art-add__note">
                            Accepts JPG, GIF and PNG file-types
                        </em>
                    </span>
                </Dropzone>
            </div>
        </>
    );
};

export default GalleryPod;
