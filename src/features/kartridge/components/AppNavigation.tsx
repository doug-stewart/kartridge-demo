import { useSelector } from '@xstate/store/react';
import clsx from 'clsx';
import tinycolor from 'tinycolor2';

import { themeStore } from '../stores/theme.store';

import NavButton from './NavButton';

const AppNavigation = () => {
    const theme = useSelector(themeStore, (state) => state.context);
    const isLight = tinycolor(theme.a).isLight();
    const navClasses = clsx('ap-nav', 'ap-nav--desktop', {
        'is-light': isLight,
    });

    return (
        <nav className={navClasses}>
            <ul className="ap-nav__list">
                <li className="ap-nav__item">
                    <NavButton label="Home" />
                </li>
                <li className="ap-nav__item">
                    <NavButton label="Games" />
                </li>
                <li className="ap-nav__item">
                    <NavButton label="Library" />
                </li>
                <li className="ap-nav__item">
                    <NavButton label="Publish" />
                </li>
            </ul>
        </nav>
    );
};

export default AppNavigation;
