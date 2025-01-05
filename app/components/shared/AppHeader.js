{/* eslint-disable jsx-a11y/anchor-is-valid*/ }

import React from 'react';
import AvatarBack from '../../assets/images/avatar-back.png';
import AvatarFront from '../../assets/images/avatar-front.png';

export default class AppHeader extends React.Component {
  render() {
    const isWindows = navigator.platform.toLowerCase().indexOf('win') >= 0;;

    return (
      <header className="ap-header">
        {isWindows &&
          <nav className="ap-win-menu">
            <button className="ap-win-menu__btn" title="Menu" />
          </nav>
        }
        {!isWindows &&
          <ul className="ap-mac-window">
            <li className="ap-mac-window__close">
              <button className="ap-mac-window__close-link" title="Close"></button>
            </li>
            <li className="ap-mac-window__min">
              <button className="ap-mac-window__min-link" title="Minimize"></button>
            </li>
            <li className="ap-mac-window__max">
              <button className="ap-mac-window__max-link " title="Maximize"></button>
            </li>
          </ul>
        }
        <nav className="ap-history">
          <ul className="ap-history__items">
            <li className="ap-history__item">
              <button className="ap-history__prev-link" title="Previous">
                <svg alt="" className="ap-history__ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 17">
                  <path d="M10.8 2.1L8.7 0 .2 8.5 8.7 17l2.1-2.1-6.4-6.4" />
                </svg>
              </button>
            </li>
            <li className="ap-history__item">
              <button disabled="" className="ap-history__next-link" title="Next">
                <svg alt="" className="ap-history__ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 17">
                  <path d="M.2 14.9L2.3 17l8.5-8.5L2.3 0 .2 2.1l6.4 6.4" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <section className="ap-search c-search">
          <div className="c-search__form">
            <svg alt="" className="c-search__ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path d="M25 9.4c0 5.2-4.2 9.4-9.4 9.4-1.9 0-3.6-.5-5-1.4l-7.1 7.1c-.4.4-1 .6-1.5.6s-1.1-.2-1.5-.6c-.8-.8-.8-2.1 0-3l7.1-7.1c-.9-1.4-1.4-3.2-1.4-5 0-5.2 4.2-9.4 9.4-9.4S25 4.2 25 9.4zm-3.1 0c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c3.4 0 6.2-2.8 6.2-6.2z" />
            </svg>
            <div className="c-search__field-grp">
              <input placeholder="Search…" className="c-search__field" type="text" />
              <button className="c-search__clear">
                ×
              </button>
            </div>
          </div>
          <ul className="c-search__results"></ul>
        </section>
        <div className="ap-menu c-options--toggle ap-user">
          <a role="button" className="ap-user__group c-avatar-trigger">
            <span className="ap-user__avatar c-avatar c-avatar--sml ap-user__avatar">
              <span className="c-avatar__media c-avatar__character"
                style={{ backgroundImage: `url('${AvatarFront}')` }}></span>
              <span className="c-avatar__media c-avatar__background"
                style={{ backgroundImage: `url('${AvatarBack}')` }}></span>
            </span>
            <strong className="ap-user__name">
              doug
              <span className="ap-user__lvl">
                Level <span className="u-lvl">10</span>
              </span>
            </strong>
          </a>
          <a title="Options" className="ap-menu__toggle">
            <span className="ap-menu__toggle-txt">
              Options
            </span>
          </a>
          <nav className="c-options__menu">
            <ul className="c-options__menu-list">
              <li className="c-options__item">
                <a className="c-options__link ">
                  Account Progress
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  View profile
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Account Settings
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Edit Avatar
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Redeem Key
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Purchase History
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Revenue Summary
                </a>
              </li>
              <li className="c-options__item">
                <a className="c-options__link ">
                  Admin Tools
                </a>
              </li>
              <li className="c-options__item c-options__item--divided">
                <a className="c-options__link ">
                  Sign out
                </a>
              </li>
            </ul>
          </nav>
        </div >
        <nav className="ap-header__sidebar-nav ap-sidebar-nav">
          <ul className="ap-sidebar-nav__list">
            <li className="ap-sidebar-nav__item">
              <a className="ap-sidebar-nav__link">
                <svg alt="" className="ap-sidebar-nav__ico chat-bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29">
                  <path className="chat-bubbles__back-fill" d="M8 15.4c0 4.8 3.9 8.7 8.7 8.7h1.1c1 1.5 3.4 4.9 5.8 4.9h1.2c.1 0 .2-.1.2-.2v-4.9c4-.8 7-4.3 7-8.5 0-4.8-3.9-8.7-8.7-8.7h-6.7c-4.7 0-8.6 3.9-8.6 8.7z" />
                  <path className="chat-bubbles__back-line" d="M8 15.4c0 4.8 3.9 8.7 8.7 8.7h1.1c1 1.5 3.4 4.9 5.8 4.9h1.2c.1 0 .2-.1.2-.2v-4.9c4-.8 7-4.3 7-8.5 0-4.8-3.9-8.7-8.7-8.7h-6.7c-4.7 0-8.6 3.9-8.6 8.7zm1 .1v-.1C9 10.9 12.3 8 16.7 8h5.7c4.5 0 7.6 2.9 7.6 7.4v.1c0 3.9-2.2 6.6-5.9 7.3-.2 0-.3.1-.5.1v4.9s0 .1-.1.1h-.1c-1.7 0-4-2.9-5-4.4-.1-.2-.3-.4-.4-.5h-1.6c-4.2-.1-7.4-3.1-7.4-7.5z" />
                  <path className="chat-bubbles__front-fill" d="M15.3 0H8.7C3.9 0 0 3.9 0 8.7c0 4.2 3 7.7 7 8.5V22c0 .1.1.2.2.2h1.2c2.4 0 4.9-3.4 5.8-4.9h1.1c4.8 0 8.7-3.9 8.7-8.7C24 3.9 20.1 0 15.3 0z" />
                  <path className="chat-bubbles__front-line" d="M15.3 0H8.7C3.9 0 0 3.9 0 8.7c0 4.2 3 7.7 7 8.5V22c0 .1.1.2.2.2h1.2c2.4 0 4.9-3.4 5.8-4.9h1.1c4.8 0 8.7-3.9 8.7-8.7C24 3.9 20.1 0 15.3 0zm-.8 15.8H13c-.1.1-.2.3-.4.5-1 1.4-2.8 4.4-4.5 4.4 0 0-.1 0-.1-.1v-4.9c-.2 0-.3 0-.5-.1-3.6-.7-6.5-3-6.5-6.9v-.1C1 4.1 4.2 1 8.7 1h5.7C18.8 1 22 4.1 22 8.6v.1c0 4.4-3.1 7-7.5 7.1z" />
                </svg>
                <span className="ap-sidebar-nav__status">
                  •••
                </span>
              </a>
            </li>
            <li className="ap-sidebar-nav__item">
              <a className="ap-sidebar-nav__link ap-meta-link">
                <svg alt="" className="ap-sidebar-nav__ico ap-meta-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100">
                  <path className="ap-meta-ico__base" fill="#FDD12B" d="M64 98.3c-.8 0-1.5-.2-2.2-.6L23.9 75.8c-1.4-.8-2.2-2.3-2.2-3.9V28.2c0-1.6.9-3.1 2.2-3.9L61.8 2.5c.7-.4 1.4-.6 2.2-.6.8 0 1.5.2 2.2.6L104 24.4c1.4.8 2.2 2.3 2.2 3.9V72c0 1.6-.9 3.1-2.2 3.9L66.2 97.7c-.7.4-1.4.6-2.2.6z" />
                  <path className="ap-meta-ico__shine" fill="#D38D00" d="M42.5 39.1v21.7c0 1 .5 1.8 1.3 2.3L62.6 74c.8.5 1.9.5 2.7 0l18.8-10.9c.8-.5 1.3-1.4 1.3-2.3V39.1c0-1-.5-1.8-1.3-2.3L65.3 25.9c-.8-.5-1.9-.5-2.7 0L43.8 36.8c-.8.5-1.3 1.4-1.3 2.3z" />
                  <path className="ap-meta-ico__fill" fill="#A86700" d="M46.7 64.7l14.8 8.6c1 .6 2.2.6 3.2 0l18.5-10.7c1-.6 1.6-1.6 1.6-2.8V38.6c0-1.1-.6-2.2-1.6-2.8l-5.1-3c-1.3 16.8-14.6 30.3-31.4 31.9z" />
                  <path className="ap-meta-ico__inset" fill="#FFF7C0" d="M85 35.4L66.2 24.5c-1.4-.8-3-.8-4.4 0L43 35.4c-1.3.8-2.2 2.2-2.2 3.8v21.7c0 1.6.8 3 2.2 3.8l18.8 10.9c1.4.8 3 .8 4.4 0L85 64.7c1.3-.8 2.2-2.2 2.2-3.8V39.1c0-1.5-.8-2.9-2.2-3.7zM83.8 61c0 .4-.2.7-.5.9L64.5 72.7c-.3.2-.7.2-1 0l-14.1-8.2c2-14.9 13.4-26.9 28.2-29.5l5.7 3.3c.3.2.5.5.5.9V61z" />
                  <path className="ap-meta-ico__right" fill="#D38D00" d="M64 97.1l39.2-22.8c.8-.5 1.3-1.4 1.3-2.3V27.8c0-.4-.4-.7-.8-.7-.1 0-.2 0-.2.1L64 50.2v46.9z" opacity=".6" />
                  <path className="ap-meta-ico__left" fill="#FFF7A9" d="M64 97.1L24.8 74.3c-.8-.5-1.3-1.4-1.3-2.3V27.8c0-.4.4-.7.8-.7.1 0 .2 0 .2.1L64 50.1v47z" opacity=".6" />
                  <path className="ap-meta-ico__stars" fill="#FFF" d="M97.7 65.1h-2v-2c0-.7-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2v2h-2c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h2v2c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-2h2c.6 0 1.2-.5 1.2-1.1v-.1c0-.7-.5-1.2-1.2-1.2zM37.5 32.3h-1.7v-1.7c0-.6-.4-1-1-1s-1 .4-1 1v1.7h-1.7c-.6 0-1 .4-1 1s.4 1 1 1h1.7V36c0 .6.4 1 1 1s1-.4 1-1v-1.7h1.7c.6 0 1-.4 1-1-.1-.5-.5-.9-1-1z" />
                  <path className="ap-meta-ico__border" fill="#B27700" d="M64 3.6c.5 0 .9.1 1.3.4l37.8 21.8c.8.5 1.3 1.4 1.3 2.3v43.7c0 1-.5 1.8-1.3 2.3L65.3 96c-.4.2-.8.4-1.3.4s-.9-.1-1.3-.4L24.8 74.2c-.8-.5-1.3-1.4-1.3-2.4V28.1c0-1 .5-1.8 1.3-2.3L62.7 4c.4-.3.8-.4 1.3-.4M64 0c-1.1 0-2.2.3-3.1.8L23 22.7c-1.9 1.1-3.1 3.2-3.1 5.4v43.7c0 2.2 1.2 4.3 3.1 5.4l37.8 21.9c.9.6 2 .8 3.1.8s2.2-.3 3.1-.8l37.9-21.9c1.9-1.1 3.1-3.2 3.1-5.4V28.1c0-2.2-1.2-4.3-3.1-5.4L67.1.8c-1-.5-2-.8-3.1-.8z" />
                  <g className="ap-meta-ico__star">
                    <path fill="#FF3534" d="M30.9 32l2.2 11.9c0 .3-.1.6-.3.8l-.4.1c-.2 0-.3 0-.4-.1L21.7 38l-10.3 6.7c-.3.2-.6.2-.8 0-.2-.2-.4-.5-.3-.8L12.4 32l-8.9-8.9c-.2-.2-.3-.6-.2-.8.1-.3.4-.5.7-.5h11.8l5.1-13.3c.1-.4.6-.6 1-.5.2.1.4.3.5.5l5.1 13.3h11.7c.3 0 .6.2.7.5.1.3 0 .6-.2.8L30.9 32z" />
                    <path fill="#7F0004" d="M21.7 7.9h.2c.2.1.4.3.5.5l5.1 13.3h11.7c.3 0 .6.2.7.5.1.3 0 .6-.2.8l-8.8 9 2.2 11.9c0 .3-.1.6-.3.8l-.4.1c-.2 0-.3 0-.4-.1L21.7 38l-10.3 6.7c-.1.1-.3.1-.4.1-.1 0-.3 0-.4-.1-.2-.2-.4-.5-.3-.8L12.4 32l-8.9-8.9c-.2-.2-.3-.6-.2-.8.1-.3.4-.5.7-.5h11.8l5.1-13.3c.1-.4.4-.6.8-.6m0-3.2c-1.7 0-3.2 1.1-3.8 2.7l-4.3 11.1H4c-1.6 0-3.1 1-3.7 2.4l-.1.2-.1.2c-.4 1.4-.1 2.9.9 4l7.8 7.8L7 43.2c-.2 1.7.4 3.2 1.7 4 .7.5 1.5.7 2.3.7.8 0 1.6-.3 2.3-.7l8.4-5.4 8.5 5.5.2.1.2.1c.6.3 1.2.4 1.8.4h.4l.4-.1.4-.1.6-.1.5-.4c1.2-.9 1.9-2.4 1.7-3.9L34.5 33l7.7-7.7.1-.1.1-.1c1-1.1 1.3-2.6.9-4l-.2-.1-.1-.2c-.7-1.4-2-2.3-3.5-2.3h-9.6L25.5 7.4c-.4-1.2-1.4-2.1-2.6-2.5-.4-.2-.8-.2-1.2-.2z" />
                  </g>
                  <g className="ap-meta-ico__square">
                    <path fill="#FF3434" d="M21.7 90.5c-.3 0-.5-.1-.7-.2L8.3 83c-.5-.3-.7-.8-.7-1.3V67.2c0-.5.3-1 .7-1.3L21 58.6c.2-.1.5-.2.7-.2.3 0 .5.1.7.2L35 65.9c.5.3.7.8.7 1.3v14.6c0 .5-.3 1-.7 1.3l-12.6 7.3c-.2.1-.5.1-.7.1z" />
                    <path fill="#C70A05" d="M21.7 90.1l13.1-7.6c.3-.2.4-.5.4-.8V67c0-.1-.1-.2-.3-.2h-.1l-13.2 7.7v15.6z" opacity=".6" />
                    <path fill="#F5AEA0" d="M21.7 90.1L8.6 82.5c-.3-.2-.4-.5-.4-.8V67c0-.1.1-.2.3-.2h.1l13.2 7.6v15.7z" opacity=".6" />
                    <path fill="#7F0104" d="M37 64.2L22.9 56c-.4-.2-.8-.3-1.2-.3-.4 0-.8.1-1.2.3L6.3 64.2c-.7.4-1.2 1.2-1.2 2v16.4c0 .8.4 1.6 1.2 2l14.2 8.2c.4.2.8.3 1.2.3.4 0 .8-.1 1.2-.3L37 84.7c.7-.4 1.2-1.2 1.2-2V66.2c0-.8-.4-1.6-1.2-2zM21.7 59c.2 0 .3 0 .4.1l12.6 7.3c.3.2.4.5.4.8v14.6c0 .3-.2.6-.4.8l-12.6 7.3c-.1.1-.3.1-.4.1-.2 0-.3 0-.4-.1L8.6 82.5c-.3-.2-.4-.5-.4-.8V67.2c0-.3.2-.6.4-.8l12.6-7.3c.2-.1.3-.1.5-.1z" />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        {isWindows &&
          <ul className="ap-win-window">
            <li className="ap-win-window__min">
              <button className="ap-win-window__min-link" title="Minimize" />
            </li>
            <li className="ap-win-window__max">
              <button className="ap-win-window__max-link" title="Maximized" />
            </li>
            <li className="ap-win-window__close">
              <button className="ap-win-window__close-link" title="Close" />
            </li>
          </ul>
        }
      </header >
    );
  }
}
