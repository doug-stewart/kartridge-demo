import { useEffect, useRef, useState } from 'react';
import { CustomPicker } from 'react-color';
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common';

type ColorPickerProps = {
    color: string;
    label: string;
    onChange: (color: { hex: string }) => void;
};

const HuePointer = () => {
    return <div className="c-palette__hue-pointer" />;
};

const SaturationPointer = () => {
    return <div className="c-palette__saturation-pointer" />;
};

const ColorPicker = ({ color, label, onChange }: ColorPickerProps) => {
    const [shows, toggleShow] = useState(false);
    const picker = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (picker.current?.contains(event.target as any)) return;
            toggleShow(false);
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <li className="u-custom__swatch" ref={picker}>
            <button className="c-palette" onClick={() => toggleShow(!shows)}>
                <span className="c-palette__color" style={{ backgroundColor: color }} />
                <span className="c-palette__title">{label.toLocaleUpperCase()}</span>
            </button>
            <div
                className="c-palette__popup"
                data-testid="color-picker"
                style={{ display: shows ? '' : 'none' }}
            >
                {/* <div className="c-palette__saturation">
                    <Saturation color={color} pointer={SaturationPointer} onChange={onChange} />
                </div>
                <div className="c-palette__hue">
                    <Hue
                        color={color}
                        direction="vertical"
                        pointer={HuePointer}
                        onChange={onChange}
                    />
                </div>
                <div className="c-palette__input">
                    <EditableInput value={color} onChange={onChange} />
                </div> */}
            </div>
        </li>
    );
};

const ColorPickerComponent = CustomPicker(ColorPicker);
export default ColorPickerComponent;
