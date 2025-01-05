import React, { useContext } from 'react';
import tinycolor from 'tinycolor2';
import { Theme } from '../../contexts/ThemeContext';
import NavButton from './NavButton';

const AppNavigation = () => {
  const themeState = useContext(Theme);
  const isLight = tinycolor(themeState.state.a).isLight();

  return (
    <nav className={`ap-nav ap-nav--desktop ${isLight ? 'is-light' : null}`}>
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
}

export default AppNavigation;