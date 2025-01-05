import React, { useContext } from 'react';
import Vibrant from 'node-vibrant';
import tinycolor from 'tinycolor2';
import ColorPicker from './ColorPicker';
import { Pods } from '../../contexts/StorefrontContext';
import { Theme } from '../../contexts/ThemeContext';

const Header = ({ preview, toggleAction }) => {
  const themeState = useContext(Theme);
  const podsState = useContext(Pods);
  const { themeUpdater } = themeState;

  const gameIcon = '/game/game-icon.png';
  const allScreenshots = podsState.state.items
    .filter((item) => item.images && item.images.length > 0)
    .map((item) => item.images)
    .flat();

  const updateColor = (label, hex) => {
    themeUpdater({ type: 'UPDATE', color: label, value: hex });
  };

  async function generatePalette(src) {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;

    const palette = await Vibrant.from(image).getPalette();

    themeUpdater({
      type: 'UPDATE',
      color: 'a',
      value: tinycolor(palette.Vibrant).toHex(),
    });
    themeUpdater({
      type: 'UPDATE',
      color: 'b',
      value: tinycolor(palette.DarkMuted).toHex(),
    });
    themeUpdater({
      type: 'UPDATE',
      color: 'c',
      value: tinycolor(palette.Muted).toHex(),
    });
    themeUpdater({
      type: 'UPDATE',
      color: 'd',
      value: tinycolor(palette.DarkVibrant).toHex(),
    });
    themeUpdater({
      type: 'UPDATE',
      color: 'e',
      value: tinycolor(palette.Muted).toHex(),
    });
    themeUpdater({
      type: 'UPDATE',
      color: 'f',
      value: tinycolor(palette.LightMuted).toHex(),
    });
  }

  return (
    <header className="u-custom__header">
      <div className="u-custom__header-title">
        <h1 className="u-custom__title">Customize storefront</h1>
        <button
          className="btn--light btn--s u-custom__save-btn"
          onClick={toggleAction}>
          {preview ? 'Leave Preview' : 'Preview Page'}
        </button>
      </div>
      <div className="u-custom__header-palette">
        <h2 className="u-custom__header-subtitle">Set your color palette</h2>
        <ul className="u-custom__palette">
          {Object.keys(themeState.state).map((color) => (
            <ColorPicker
              key={color}
              label={color}
              color={themeState.state[color]}
              onChange={({ hex }) => updateColor(color, hex)}
            />
          ))}
        </ul>
      </div>
      <div className="u-custom__header-screenshots c-filmstrip">
        <h2 className="c-filmstrip__title u-custom__header-subtitle">
          Grab color palette from screenshots
        </h2>
        <div className="c-filmstrip__spacer">
          <ul className="c-filmstrip__list">
            <li className="c-filmstrip__item">
              <button
                className="c-filmstrip__btn"
                onClick={() => generatePalette(gameIcon)}>
                <img alt="" src={gameIcon} className="c-filmstrip__img" />
              </button>
            </li>
            {allScreenshots.map((item) => (
              <li key={item.image} className="c-filmstrip__item">
                <button
                  className="c-filmstrip__btn"
                  onClick={() => generatePalette(item.image)}>
                  <img alt="" src={item.image} className="c-filmstrip__img" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="u-custom__header-btns">
        <button
          disabled=""
          className="btn--purple btn--m u-custom__header-btns__btn"
          type="submit">
          Save Changes
        </button>
        <a
          href="/"
          role="button"
          className="btn--light btn--m u-custom__header-btns__btn active">
          Back / Cancel
        </a>
      </nav>
    </header>
  );
};

export default Header;
