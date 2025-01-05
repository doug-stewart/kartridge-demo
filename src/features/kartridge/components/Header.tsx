import { useSelector } from '@xstate/store/react';
import clsx from 'clsx';
import Vibrant from 'node-vibrant';
import tinycolor from 'tinycolor2';

import { podsStore } from '../stores/pods.store';
import { themeStore } from '../stores/theme.store';
import type { PodObj } from '../types';

import ColorPicker from './ColorPicker';

type HeaderProps = {
    preview: boolean;
    toggleAction: () => void;
};

const Header = ({ preview, toggleAction }: HeaderProps) => {
    const pods = useSelector(podsStore, (state) => state.context.pods);
    const theme = useSelector(themeStore, (state) => state.context);

    const gameIcon = '/game/game-icon.png';

    const allScreenshots = pods.reduce(
        (screenshots: Array<{ id: number; image: string }>, pod: PodObj) => {
            if (pod.type === 'gallery') {
                return [...screenshots, ...pod.images];
            }
            return screenshots;
        },
        [],
    );

    const updateColor = (label: keyof typeof theme, hex: string) => {
        themeStore.send({ type: label, color: hex });
    };

    const generatePalette = async (src: string) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = src;

        const palette = await Vibrant.from(image).getPalette();

        themeStore.send({ type: 'a', color: tinycolor(palette.Vibrant).toHex() });
        themeStore.send({ type: 'b', color: tinycolor(palette.DarkMuted).toHex() });
        themeStore.send({ type: 'c', color: tinycolor(palette.Muted).toHex() });
        themeStore.send({ type: 'd', color: tinycolor(palette.DarkVibrant).toHex() });
        themeStore.send({ type: 'e', color: tinycolor(palette.Muted).toHex() });
        themeStore.send({ type: 'f', color: tinycolor(palette.LightMuted).toHex() });
    };

    return (
        <header className="u-custom__header">
            <div className="u-custom__header-title">
                <h1 className="u-custom__title">Customize storefront</h1>
                <button
                    className={clsx('btn--light', 'btn--s', 'u-custom__save-btn')}
                    onClick={toggleAction}
                >
                    {preview ? 'Leave Preview' : 'Preview Page'}
                </button>
            </div>
            <div className="u-custom__header-palette">
                <h2 className="u-custom__header-subtitle">Set your color palette</h2>
                <ul className="u-custom__palette">
                    {Object.keys(theme).map((color) => (
                        <ColorPicker
                            key={color}
                            label={color}
                            color={theme[color as keyof typeof theme]}
                            onChange={({ hex }) => updateColor(color as keyof typeof theme, hex)}
                        />
                    ))}
                </ul>
            </div>
            <div className={clsx('u-custom__header-screenshots', 'c-filmstrip')}>
                <h2 className={clsx('c-filmstrip__title', 'u-custom__header-subtitle')}>
                    Grab color palette from screenshots
                </h2>
                <div className="c-filmstrip__spacer">
                    <ul className="c-filmstrip__list">
                        <li className="c-filmstrip__item">
                            <button
                                className="c-filmstrip__btn"
                                onClick={() => generatePalette(gameIcon)}
                            >
                                <img alt="" src={gameIcon} className="c-filmstrip__img" />
                            </button>
                        </li>
                        {allScreenshots.map((item) => (
                            <li key={item.image} className="c-filmstrip__item">
                                <button
                                    className="c-filmstrip__btn"
                                    onClick={() => generatePalette(item.image)}
                                >
                                    <img alt="" src={item.image} className="c-filmstrip__img" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav className="u-custom__header-btns">
                <button
                    disabled
                    className={clsx('btn--purple', 'btn--m', 'u-custom__header-btns__btn')}
                    type="submit"
                >
                    Save Changes
                </button>
                <a
                    href="/"
                    role="button"
                    className={clsx('btn--light', 'btn--m', 'u-custom__header-btns__btn', 'active')}
                >
                    Back / Cancel
                </a>
            </nav>
        </header>
    );
};

export default Header;
