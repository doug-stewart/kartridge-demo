import React, { useEffect, useRef, useState } from 'react';
import {
  EditableInput,
  Hue,
  Saturation,
} from 'react-color/lib/components/common/';
import { CustomPicker } from 'react-color';
import { HuePointer } from './HuePointer';
import { SaturationPointer } from './SaturationPointer';

const ColorPicker = ({ hsl, hsv, hex, label, onChange }) => {
  const [shows, toggleShow] = useState(false);
  const picker = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (picker.current.contains(event.target)) return;
      toggleShow(false);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <li className="u-custom__swatch" ref={picker}>
      <button className="c-palette" onClick={() => toggleShow(!shows)}>
        <span className="c-palette__color" style={{ backgroundColor: hex }} />
        <span className="c-palette__title">{label.toLocaleUpperCase()}</span>
      </button>
      <div
        className="c-palette__popup"
        style={{ display: shows ? '' : 'none' }}>
        <div className="c-palette__saturation">
          <Saturation
            hsl={hsl}
            hsv={hsv}
            pointer={SaturationPointer}
            onChange={onChange}
          />
        </div>
        <div className="c-palette__hue">
          <Hue
            hsl={hsl}
            direction="vertical"
            pointer={HuePointer}
            onChange={onChange}
          />
        </div>
        <div className="c-palette__input">
          <EditableInput value={hex} onChange={onChange} />
        </div>
      </div>
    </li>
  );
};

export default CustomPicker(ColorPicker);
