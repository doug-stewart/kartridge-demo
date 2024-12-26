import { PropsWithChildren } from 'react';
import { useDropzone } from 'react-dropzone';

import type { MediaObj } from '../types';

type DropzoneProps = PropsWithChildren & {
    returner: (file: MediaObj) => void;
    classes: string;
};

const Dropzone = ({ returner, children, classes }: DropzoneProps) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (files) => {
            files.forEach((file) => {
                const reader = new FileReader();

                reader.onabort = () => console.error('file reading was aborted');
                reader.onerror = () => console.error('file reading has failed');
                reader.onload = () => {
                    const name = file.name;
                    const type = file.type;
                    const data = reader.result as string;

                    returner({ name: name, data: data, type: type });
                };

                reader.readAsDataURL(file);
            });
        },
    });

    return (
        <label className={`c-dropzone ${classes}`} {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
        </label>
    );
};

export default Dropzone;
