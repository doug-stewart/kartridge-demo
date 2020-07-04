import React, { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { Theme } from '../../contexts/ThemeContext';

const AppTheme = () => {
  const themeState = useContext(Theme);

  const split = color => {
    const rgb = tinycolor(color).toRgb();
    return `${rgb.r},${rgb.g},${rgb.b}`;
  };

  const swatches = () => {
    return Object.keys(themeState.state)
      .map(color => `--swatch-${color}: ${split(themeState.state[color])};`)
      .join(' ');
  };

  const offset = () => {
    const lum = tinycolor(themeState.state['c']).getLuminance();
    return lum > 0.1 ? '0,0,0' : '255,255,255';
  };

  const tabs = () => {
    const lum = tinycolor(themeState.state['d']).getLuminance();
    return lum > 0.1 ? '0,0,0' : '255,255,255';
  };

  const styles = `
    :root {
      ${swatches()}
      --header-offset: ${offset()};
      --tabs-bg: ${tabs()};
      --tabs-border: rgba(${tabs()}, .2);
    }
    .ap-nav {
      --nav-base-color: rgba(var(--swatch-a), 1);
      box-shadow: .2rem 0 0 rgba(var(--swatch-b), 0.2);
    }
  `;

  return <style>{styles}</style>;
};

export default AppTheme;
