import { useSelector } from '@xstate/store/react';
import tinycolor from 'tinycolor2';

import { themeStore } from '../stores/theme.store';

const AppTheme = () => {
    const theme = useSelector(themeStore, (state) => state.context);

    const swatches = () => {
        return Object.keys(theme)
            .map((color) => `--swatch-${color}: ${theme[color as keyof typeof theme]};`)
            .join(' ');
    };

    const offset = () => {
        const lum = tinycolor(theme['c']).getLuminance();
        return lum > 0.1 ? '#000' : '#fff';
    };

    const tabs = () => {
        const lum = tinycolor(theme['d']).getLuminance();
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
