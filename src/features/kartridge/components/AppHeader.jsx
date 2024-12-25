import clsx from 'clsx';
import React from 'react';

import AvatarBack from '../assets/images/avatar-back.png';
import AvatarFront from '../assets/images/avatar-front.png';
import ChatIco from '../assets/images/icons/chat.svg?react';
import NextIco from '../assets/images/icons/next.svg?react';
import PrevIco from '../assets/images/icons/prev.svg?react';
import SearchIco from '../assets/images/icons/search.svg?react';
import TokenIco from '../assets/images/icons/token.svg?react';

export default class AppHeader extends React.Component {
    render() {
        const isWindows = navigator.platform.toLowerCase().indexOf('win') >= 0;

        return (
            <header className="ap-header">
                {isWindows && (
                    <nav className="ap-win-menu">
                        <button className="ap-win-menu__btn" title="Menu" />
                    </nav>
                )}
                {!isWindows && (
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
                )}
                <nav className="ap-history">
                    <ul className="ap-history__items">
                        <li className="ap-history__item">
                            <button className="ap-history__prev-link" title="Previous">
                                <PrevIco className="ap-history__ico" />
                            </button>
                        </li>
                        <li className="ap-history__item">
                            <button disabled="" className="ap-history__next-link" title="Next">
                                <NextIco className="ap-history__ico" />
                            </button>
                        </li>
                    </ul>
                </nav>
                <section className={clsx('ap-search', 'c-search')}>
                    <div className="c-search__form">
                        <SearchIco className="c-search__ico" />
                        <div className="c-search__field-grp">
                            <input placeholder="Search…" className="c-search__field" type="text" />
                            <button className="c-search__clear">×</button>
                        </div>
                    </div>
                    <ul className="c-search__results"></ul>
                </section>
                <div className={clsx('ap-menu c-options--toggle', 'ap-user')}>
                    <a role="button" className={clsx('ap-user__group', 'c-avatar-trigger')}>
                        <span
                            className={clsx(
                                'ap-user__avatar',
                                'c-avatar',
                                'c-avatar--sml',
                                'ap-user__avatar',
                            )}
                        >
                            <span
                                className={clsx('c-avatar__media', 'c-avatar__character')}
                                style={{ backgroundImage: `url('${AvatarFront}')` }}
                            ></span>
                            <span
                                className={clsx('c-avatar__media', 'c-avatar__background')}
                                style={{ backgroundImage: `url('${AvatarBack}')` }}
                            ></span>
                        </span>
                        <strong className="ap-user__name">
                            doug
                            <span className="ap-user__lvl">
                                Level <span className="u-lvl">10</span>
                            </span>
                        </strong>
                    </a>
                    <a title="Options" className="ap-menu__toggle">
                        <span className="ap-menu__toggle-txt">Options</span>
                    </a>
                    <nav className="c-options__menu">
                        <ul className="c-options__menu-list">
                            <li className="c-options__item">
                                <a className="c-options__link ">Account Progress</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">View profile</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Account Settings</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Edit Avatar</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Redeem Key</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Purchase History</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Revenue Summary</a>
                            </li>
                            <li className="c-options__item">
                                <a className="c-options__link ">Admin Tools</a>
                            </li>
                            <li className="c-options__item c-options__item--divided">
                                <a className="c-options__link ">Sign out</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav className={clsx('ap-header__sidebar-nav', 'ap-sidebar-nav')}>
                    <ul className="ap-sidebar-nav__list">
                        <li className="ap-sidebar-nav__item">
                            <a className="ap-sidebar-nav__link">
                                <ChatIco className={clsx('ap-sidebar-nav__ico', 'chat-bubbles')} />
                                <span className="ap-sidebar-nav__status">•••</span>
                            </a>
                        </li>
                        <li className="ap-sidebar-nav__item">
                            <a className={clsx('ap-sidebar-nav__link', 'ap-meta-link')}>
                                <TokenIco className={clsx('ap-sidebar-nav__ico', 'ap-meta-ico')} />
                            </a>
                        </li>
                    </ul>
                </nav>
                {isWindows && (
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
                )}
            </header>
        );
    }
}
