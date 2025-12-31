import clsx from 'clsx';
import { Vibrant } from 'node-vibrant/browser';

import { usePodsStore } from '../stores/pods.store';
import { useThemeStore } from '../stores/theme.store';
import type { PodObj } from '../types';

import ColorPicker from './ColorPicker';

type HeaderProps = { preview: boolean; toggleAction: () => void };
type ThemeColorKey = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

const Header = ({ preview, toggleAction }: HeaderProps) => {
    const pods = usePodsStore((state) => state.pods);
    const theme = useThemeStore();
    const setTheme = useThemeStore((state) => state.setTheme);

    const gameIcon = `${import.meta.env.BASE_URL}game/game-icon.png`;

    const allScreenshots = pods.reduce(
        (screenshots: Array<{ id: number; image: string }>, pod: PodObj) => {
            if (pod.type === 'gallery') {
                return [...screenshots, ...pod.images];
            }
            return screenshots;
        },
        [],
    );

    const updateColor = (label: ThemeColorKey, hex: string) => {
        setTheme(label, hex);
    };

    const generatePalette = async (src: string) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = src;

        const palette = await Vibrant.from(image).getPalette();

        setTheme('a', palette.Vibrant?.hex || '#000');
        setTheme('b', palette.DarkMuted?.hex || '#fff');
        setTheme('c', palette.Muted?.hex || '#fff');
        setTheme('d', palette.DarkVibrant?.hex || '#000');
        setTheme('e', palette.Muted?.hex || '#fff');
        setTheme('f', palette.LightMuted?.hex || '#fff');
    };

    return (
        <header className="u-custom__header">
            <div className="u-custom__header-title">
                <h1 className="u-custom__title">Customize storefront</h1>
                <button
                    type="button"
                    className={clsx('btn--light', 'btn--s', 'u-custom__save-btn')}
                    onClick={toggleAction}
                >
                    {preview ? 'Leave Preview' : 'Preview Page'}
                </button>
            </div>
            <div className="u-custom__header-palette">
                <h2 className="u-custom__header-subtitle">Set your color palette</h2>
                <ul className="u-custom__palette">
                    {(['a', 'b', 'c', 'd', 'e', 'f'] as ThemeColorKey[]).map((color) => (
                        <ColorPicker
                            key={color}
                            label={color}
                            color={theme[color]}
                            onChange={({ hex }) => updateColor(color, hex)}
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
                                type="button"
                                className="c-filmstrip__btn"
                                onClick={() => generatePalette(gameIcon)}
                            >
                                <img alt="" src={gameIcon} className="c-filmstrip__img" />
                            </button>
                        </li>
                        {allScreenshots.map((item) => (
                            <li key={item.image} className="c-filmstrip__item">
                                <button
                                    type="button"
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
