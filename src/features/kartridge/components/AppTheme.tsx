import tinycolor from 'tinycolor2';

import { useThemeStore } from '../stores/theme.store';

const AppTheme = () => {
    const theme = useThemeStore();

    const swatches = () => {
        return (['a', 'b', 'c', 'd', 'e', 'f'] as const)
            .map((color) => `--swatch-${color}: ${theme[color]};`)
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
