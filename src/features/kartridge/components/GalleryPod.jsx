import React from 'react';
import { ReactSortable } from 'react-sortablejs';

import Dropzone from './Dropzone';
import GalleryImage from './GalleryImage';

const GalleryPod = ({ pod, images, layout, setLayout, setImages, addImage, removeImage }) => {
    const columns = ['1', '2', '3'];

    const processUpload = (data) => {
        const isImage = data.type.toLowerCase().includes('jpeg', 'jpg', 'png');
        if (isImage) addImage(pod, data);
    };

    const updateImages = (items) => setImages(pod, items);

    return (
        <>
            <p className="c-media__col-ctrl">
                <strong className="c-media__col-ctrl__title">Images Per Row:</strong>
                <select
                    className="c-media__col-ctrl__select"
                    value={layout}
                    onBlur={(event) => setLayout(pod, event.target.value)}
                    onChange={(event) => setLayout(pod, event.target.value)}
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
