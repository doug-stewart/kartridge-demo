import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ returner, children, classes }) => {
  const onDrop = useCallback(
    files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onabort = () => console.error('file reading was aborted');
        reader.onerror = () => console.error('file reading has failed');
        reader.onload = () => {
          const name = file.name;
          const type = file.type;
          const data = reader.result;

          returner({ name: name, data: data, type: type });
        };

        reader.readAsDataURL(file);
      });
    },
    [returner]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <label className={`c-dropzone ${classes}`} {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </label>
  );
};

export default Dropzone;
