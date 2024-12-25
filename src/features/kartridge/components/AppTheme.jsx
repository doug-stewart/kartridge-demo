import React, { useContext } from 'react';
import tinycolor from 'tinycolor2';

import { Theme } from '../contexts/ThemeContext';

const AppTheme = () => {
    const themeState = useContext(Theme);

    const swatches = () => {
        return Object.keys(themeState.state)
            .map((color) => `--swatch-${color}: ${themeState.state[color]};`)
            .join(' ');
    };

    const offset = () => {
        const lum = tinycolor(themeState.state['c']).getLuminance();
        return lum > 0.1 ? '#000' : '#fff';
    };

    const tabs = () => {
        const lum = tinycolor(themeState.state['d']).getLuminance();
        return lum > 0.1 ? '#000' : '#fff';
    };

    const styles = `
    :root {
      ${swatches()}
      --header-offset: ${offset()};
      --tabs-bg: ${tabs()};
      --tabs-border: rgba(${tabs()}, .2);
    }
    .ap-nav {
      --nav-base-color: var(--swatch-a);
      box-shadow: .2rem 0 0 color-mix(in srgb, var(--swatch-b), transparent 20%);
    }
  `;

    return <style>{styles}</style>;
};

export default AppTheme;
