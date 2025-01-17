import clsx from 'clsx';

import type { MediaObj } from '../types';

import Dropzone from './Dropzone';

type BackgroundControlProps = {
    background: MediaObj;
    setBackground: (data: MediaObj) => void;
};

const BackgroundControl = ({ background, setBackground }: BackgroundControlProps) => {
    const updateBackground = (data: MediaObj) => {
        if (data.type.includes('video/') || data.type.includes('image/')) {
            setBackground(data);
        } else {
            console.error('That is not a valid file type.');
        }
    };

    const resetBackground = () => {
        setBackground({ name: '', data: '', type: '' });
    };

    const bgCtrlClasses = clsx('c-bgctrl__labe', {
        checked: background.name !== '',
    });

    return (
        <fieldset className={clsx('u-custom__bg-ctrl', 'c-bgctrl')}>
            <h2 className="c-bgctrl__title">Set your background artwork</h2>
            <div className="c-bgctrl__option-image">
                <div className={bgCtrlClasses}>
                    <span className="c-bgctrl__txt">Upload a video or image</span>
                    <em className="c-bgctrl__note">
                        Minimum 720p. JPG, GIF, PNG, or MP4 recommended.
                    </em>
                    <Dropzone classes="c-upload has-preview" returner={updateBackground}>
                        {background.name === '' ? (
                            <span className="c-upload__info">
                                <span className="c-upload__msg">
                                    <strong>Drag and Drop your file here</strong>
                                    or
                                    <span
                                        className={clsx('btn--light', 'btn--s', 'c-upload__action')}
                                    >
                                        Select from Computer
                                    </span>
                                </span>
                            </span>
                        ) : (
                            <span className="c-upload__info">
                                <strong className="c-upload__title">{background.name}</strong>
                                <span className={clsx('btn--light btn--s', 'c-upload__change')}>
                                    Change File
                                </span>
                            </span>
                        )}
                    </Dropzone>
                </div>
            </div>
            <div className="c-bgctrl__option-default">
                <button className="c-bgctrl__label" onClick={resetBackground}>
                    <span className="c-bgctrl__txt">reset to default (game icon)</span>
                </button>
            </div>
        </fieldset>
    );
};

export default BackgroundControl;
