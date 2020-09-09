import React, { useContext } from 'react';
import cx from 'classnames';
import tinycolor from 'tinycolor2';
import { Theme } from '../../contexts/ThemeContext';
import NavButton from './NavButton';

const AppNavigation = () => {
  const themeState = useContext(Theme);
  const isLight = tinycolor(themeState.state.a).isLight();
  const navClasses = cx('ap-nav', 'ap-nav--desktop', {
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
