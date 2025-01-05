import clsx from 'clsx';
import React, { useContext, useState } from 'react';

import AppleIco from '../assets/images/icons/apple.svg?react';
import InfoSmlIco from '../assets/images/icons/info-sml.svg?react';
import InfoIco from '../assets/images/icons/info.svg?react';
import PreviewIco from '../assets/images/icons/preview.svg?react';
import StarIco from '../assets/images/icons/star.svg?react';
import WindowsIco from '../assets/images/icons/windows.svg?react';
import WishIco from '../assets/images/icons/wishlist.svg?react';
import BackgroundMedia from '../components/BackgroundMedia';
import Gallery from '../components/Gallery';
import Text from '../components/Text';
import Trailer from '../components/Trailer';
import { Pods } from '../contexts/StorefrontContext';

const Preview = ({ background }) => {
    const podsState = useContext(Pods);
    const allPods = podsState.state;
    const [viewBg, setViewBg] = useState(false);
    const mainClasses = clsx('c-feat-pg__main', 'gp-main', 'u-custom__preview', {
        'is-viewing-bg': viewBg,
    });

    let podKey = 1;

    const getPodKey = () => {
        return podKey++;
    };

    const getDate = () => {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];
        const today = new Date();
        const date = `${months[today.getMonth()]}, ${today.getDate()}, ${today.getFullYear()}`;

        return date;
    };

    return (
        <section className={mainClasses}>
            <span
                className="c-feat-pg__view-bg"
                onBlur={() => {
                    setViewBg(false);
                }}
                onMouseOver={() => {
                    setViewBg(true);
                }}
                onMouseOut={() => {
                    setViewBg(false);
                }}
                onFocus={() => {
                    setViewBg(true);
                }}
            >
                <PreviewIco className="c-feat-pg__view-bg__ico" />
            </span>
            <header className={clsx('c-feat-pg__title', 'gp-title')}>
                <h1 className={clsx('gp-name', 'is-selectable')}>
                    <span className="gp-name-txt">Dawn Racer 2049</span>
                </h1>
                <div className="gp-meta">
                    <ul className={clsx('gp-platforms', 'c-platforms')}>
                        <li className="c-platform">
                            <WindowsIco className={clsx('c-platform-ico', 'c-platform-ico--win')} />
                        </li>
                        <li className="c-platform">
                            <AppleIco className={clsx('c-platform-ico', 'c-platform-ico--mac')} />
                        </li>
                    </ul>
                    <ul className={clsx('c-tags', 'gp-tags')}>
                        <li className={clsx('c-tag', 'c-tag--linked')}>
                            <span className="c-tag__link">Racing</span>
                        </li>
                        <li className={clsx('c-tag', 'c-tag--linked')}>
                            <span className="c-tag__link">Sci-Fi</span>
                        </li>
                        <li className={clsx('c-tag', 'c-tag--linked')}>
                            <span className="c-tag__link">Adventure</span>
                        </li>
                        <li className={clsx('c-tag', 'c-tooltip__trigger')}>
                            DRM Free
                            <InfoSmlIco className="c-tag__ico" />
                            <span
                                className={clsx('gp-tags__tooltip', 'c-tooltip', 'c-tooltip--top')}
                            >
                                This game does not utilize DRM or require Kartridge to play.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="gp-actions">
                    <span className="gp-buy">
                        <button className={clsx('gp-buy-btn', 'btn--red', 'btn--xl', 'has-subtag')}>
                            <strong>Buy</strong> for <strong>$24.99</strong>
                        </button>
                    </span>
                    <button
                        className={clsx(
                            'btn-ico-action',
                            'btn-ico-action--wishlist',
                            'c-sml-tooltip-trigger',
                        )}
                        type="submit"
                    >
                        <span className="c-sml-tooltip">Add to Wishlist</span>
                        <WishIco className="btn-wishlist-ico--add" />
                    </button>
                </div>
            </header>
            <section className="c-feat-pg__sections">
                <div className={clsx('c-feat-pg__sections-inner', 'c-tabs', 'gp-body')}>
                    <nav
                        className={clsx(
                            'gp-tabs',
                            'gp-tabs--main',
                            'c-feat-pg__sections-nav',
                            'c-tabs__nav',
                        )}
                    >
                        <ul className="c-tabs__list">
                            <li className="c-tabs__item">
                                <span className={clsx('c-tabs__link', 'disabled', 'active')}>
                                    <span className="c-feat-pg__tab-media">
                                        <span className="gp-ico">
                                            <video
                                                autoPlay
                                                className="c-game-ico__trailer"
                                                disableRemotePlayback=""
                                                loop
                                                muted
                                                playsInline
                                                poster={'/game/game-icon.png'}
                                                preload="none"
                                            />
                                        </span>
                                    </span>
                                    <span className={clsx('c-feat-pg__tab-label', 'truncate')}>
                                        About
                                    </span>
                                </span>
                            </li>
                            <li className="c-tabs__item">
                                <span className={clsx('c-tabs__link', 'disabled')}>
                                    <span
                                        className={clsx(
                                            'c-rating',
                                            'c-feat-pg__tab-media',
                                            'gp-rating',
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                'c-rating__all',
                                                'c-sml-tooltip-trigger',
                                            )}
                                        >
                                            <StarIco className="c-rating__all-star" />
                                            <span className="c-rating__rating">4.38</span>
                                            <span className="c-rating__count">(16 Ratings)</span>
                                        </span>
                                    </span>
                                    <span className={clsx('c-feat-pg__tab-label', 'truncate')}>
                                        Reviews
                                    </span>
                                </span>
                            </li>
                            <li className="c-tabs__item">
                                <span
                                    className={clsx('c-tabs__link', 'c-avatar-trigger', 'disabled')}
                                >
                                    <span className="c-feat-pg__tab-media">
                                        <span
                                            className={clsx(
                                                'gp-body__dev-avatar',
                                                'c-avatar',
                                                'c-avatar--sml',
                                                'gp-body__dev-avatar',
                                            )}
                                        >
                                            <span
                                                className={clsx(
                                                    'c-avatar__media',
                                                    'c-avatar__character',
                                                )}
                                            />
                                            <span
                                                className={clsx(
                                                    'c-avatar__media',
                                                    'c-avatar__background',
                                                )}
                                                style={{
                                                    backgroundImage: 'url(/game/dev-avatar.png)',
                                                }}
                                            />
                                        </span>
                                    </span>
                                    <span className={clsx('c-feat-pg__tab-label', 'truncate')}>
                                        by also_doug
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <div className={clsx('c-tabs__section', 'gp-media', 'is-active')}>
                        <ul className={clsx('c-stats', 'gp-stats')}>
                            <li className="c-stats__item">
                                <strong className="c-stats__main">{getDate()}</strong>
                                <span className="c-stats__sec">Updated</span>
                            </li>
                            <li className={clsx('c-stats__item', 'c-tooltip__trigger')}>
                                <strong className="c-stats__main">
                                    High
                                    <InfoIco className="c-stats__ico" />
                                </strong>
                                <span className="c-stats__sec">System Reqs</span>
                                <span
                                    className={clsx(
                                        'c-tooltip',
                                        'c-tooltip--top',
                                        'gp-reqs__tooltip',
                                    )}
                                >
                                    <dl className="c-subsect">
                                        <dt className={clsx('c-subsect__label', 'active')}>
                                            System Requirements
                                        </dt>
                                        <dd className={clsx('c-subsect__item', 'active')}>
                                            <dl className={clsx('c-requires', 'is-selectable')}>
                                                <dt className="c-requires__prop">CPU</dt>
                                                <dd className="c-requires__val">
                                                    Quad - Core @3.5 GHz or better
                                                </dd>
                                                <dt className="c-requires__prop">RAM</dt>
                                                <dd className="c-requires__val">8 GB</dd>
                                                <dt className="c-requires__prop">GPU</dt>
                                                <dd className="c-requires__val">
                                                    AMD or Nvidia GPU with 4 GB of VRAM or more
                                                </dd>
                                                <dt className="c-requires__prop">OS</dt>
                                                <dd className="c-requires__val">
                                                    Windows 7, MacOS 10.8
                                                </dd>
                                                <dt className="c-requires__prop">Storage</dt>
                                                <dd className="c-requires__val">
                                                    3.07GB on Windows, 3.09GB on macOS
                                                </dd>
                                                <dt className="c-requires__prop">DRM</dt>
                                                <dd className="c-requires__val">
                                                    This game does not utilize DRM or require
                                                    Kartridge to play.
                                                </dd>
                                            </dl>
                                        </dd>
                                    </dl>
                                </span>
                            </li>
                        </ul>
                        {allPods.map((pod) => {
                            if (pod.type === 'gallery') {
                                return (
                                    <Gallery
                                        key={getPodKey()}
                                        layout={pod.layout}
                                        images={pod.images}
                                    />
                                );
                            }
                            if (pod.type === 'trailer') {
                                return <Trailer key={getPodKey()} url={pod.url} />;
                            }
                            if (pod.type === 'text') {
                                return <Text key={getPodKey()} text={pod.text} />;
                            }
                            return '';
                        })}
                    </div>
                </div>
            </section>
            <BackgroundMedia background={background} />
        </section>
    );
};

export default Preview;
