import React, { useContext } from 'react';
import { ReactSortable } from 'react-sortablejs-typescript';
import { Pods } from '../../contexts/StorefrontContext';
import PodHeader from './PodHeader';
import GalleryImage from './GalleryImage';
import Dropzone from './Dropzone';

const GalleryPod = ({ podId }) => {
  const columns = ['1', '2', '3'];
  const podsState = useContext(Pods);
  const { podUpdater } = podsState;
  const gallery = podsState.state.items[podId];

  const setLayout = (pod, layout) => podUpdater({ type: 'setLayout', pod: podId, layout: layout });
  const setImages = list => podUpdater({ type: 'setImages', pod: podId, images: list.items });
  const addImage = (pod, data) => podUpdater({ type: 'addImage', pod: pod, image: data });
  const removeImage = (pod, id) => podUpdater({ type: 'removeImage', pod: pod, image: id });

  const processUpload = data => {
    const isImage = data.type.toLowerCase().includes('jpeg', 'jpg', 'png');
    if (isImage) addImage(podId, data);
  };

  return (
    <li className="c-media__container c-media__gallery">
      <PodHeader id={podId} />
      <p className="c-media__col-ctrl">
        <strong className="c-media__col-ctrl__title">Images Per Row:</strong>
        <select
          className="c-media__col-ctrl__select"
          value={gallery.layout}
          onBlur={event => setLayout(podId, event.target.value)}
          onChange={event => setLayout(podId, event.target.value)}
        >
          {columns.map(column => {
            return (
              <option key={column} value={column}>
                {column} Image
              </option>
            );
          })}
        </select>
      </p>
      <div className="c-media__artwork-cont">
        {gallery.images.length !== 0 && (
          <ReactSortable className={`c-media__artwork sortable-objects c-media__artwork--x${gallery.layout}`} list={gallery.images} setList={items => setImages({ items })} tag="ul">
            {gallery.images.map((image, id) => {
              return <GalleryImage key={image} image={image} removeImage={() => removeImage(podId, id)} />;
            })}
          </ReactSortable>
        )}
        <Dropzone classes="c-media__item-add" returner={processUpload}>
          <span className="c-media__art-add">
            <span className="c-media__art-add__label">Drag and Drop / Select Image</span>
            <em className="c-media__art-add__note">Accepts JPG, GIF and PNG file-types</em>
          </span>
        </Dropzone>
      </div>
    </li>
  );
};

export default GalleryPod;
