import { ReactSortable } from 'react-sortablejs';

import type { ImageObj, GalleryObj, MediaObj } from '../types';

import Dropzone from './Dropzone';
import GalleryImage from './GalleryImage';

type GalleryObjProps = {
    pod: GalleryObj;
    images: Array<ImageObj>;
    layout: number;
    setLayout: (pod: GalleryObj, layout: GalleryObj['layout']) => void;
    setImages: (pod: GalleryObj, images: GalleryObj['images']) => void;
    addImage: (pod: GalleryObj, image: ImageObj) => void;
    removeImage: (pod: GalleryObj, id: number) => void;
};

const GalleryObj = ({
    pod,
    images,
    layout,
    setLayout,
    setImages,
    addImage,
    removeImage,
}: GalleryObjProps) => {
    const columns = ['1', '2', '3'];
    const formats = ['jpeg', 'jpg', 'png', 'gif'];

    const isValidImage = (media: MediaObj) =>
        formats.some((format) => media.type.toLowerCase().includes(format));

    const processUpload = (media: MediaObj) => {
        if (!isValidImage(media)) return;
        const newImage: ImageObj = { id: pod.images.length + 1, image: media.data };
        addImage(pod, newImage);
    };

    const updateImages = (data: { items: Array<ImageObj> }): void => {
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
                        setLayout(pod, event.target.value as unknown as GalleryObj['layout'])
                    }
                    onChange={(event) =>
                        setLayout(pod, event.target.value as unknown as GalleryObj['layout'])
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

export default GalleryObj;
