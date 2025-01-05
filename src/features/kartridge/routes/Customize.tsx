import clsx from 'clsx';

import AppleIco from '../assets/images/icons/apple.svg?react';
import InfoSmlIco from '../assets/images/icons/info-sml.svg?react';
import WindowsIco from '../assets/images/icons/windows.svg?react';
import BackgroundControl from '../components/BackgroundControl';
import BackgroundMedia from '../components/BackgroundMedia';
import GamePods from '../components/GamePods';
import type { Media } from '../types';

type CustomizeProps = {
    background: Media;
    setBackground: any;
};

const Customize = ({ background, setBackground }: CustomizeProps) => {
    return (
        <>
            <span className={clsx('c-key', 'c-key--a')}>
                <span className="c-key__color"> </span>
                <span className="c-key__label">A</span>
            </span>
            <section className={clsx('c-feat-pg__main', 'gp-main', 'u-custom__preview')}>
                <span className={clsx('c-key__group', 'u-custom__title-keys')}>
                    <span className={clsx('c-key', 'c-key--b')}>
                        <span className="c-key__color"> </span>
                        <span className="c-key__label">B</span>
                    </span>
                    <span className={clsx('c-key', 'c-key--c')}>
                        <span className="c-key__color">Text</span>
                        <span className="c-key__label">C</span>
                    </span>
                </span>
                <div className={clsx('c-feat-pg__title', 'gp-title', 'is-editing')}>
                    <h1 className="gp-name">Dawn Racer 2049</h1>
                    <div className="gp-meta">
                        <ul className={clsx('gp-platforms', 'c-platforms')}>
                            <li className="c-platform">
                                <WindowsIco
                                    className={clsx('c-platform-ico', 'c-platform-ico--win')}
                                />
                            </li>
                            <li className="c-platform">
                                <AppleIco
                                    className={clsx('c-platform-ico', 'c-platform-ico--mac')}
                                />
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
                                    className={clsx(
                                        'gp-tags__tooltip',
                                        'c-tooltip',
                                        'c-tooltip--top',
                                    )}
                                >
                                    This game does not utilize DRM or require Kartridge to play.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="gp-actions">
                        <span className="gp-buy">
                            <button
                                className={clsx('gp-buy-btn', 'btn--red', 'btn--xl', 'has-subtag')}
                            >
                                <strong>Install</strong>
                            </button>
                        </span>
                    </div>
                    <BackgroundControl background={background} setBackground={setBackground} />
                </div>
                <GamePods />
                <BackgroundMedia background={background} />
            </section>
        </>
    );
};

export default Customize;
