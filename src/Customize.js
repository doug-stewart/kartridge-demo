import React from 'react';
import cx from 'classnames';
import BackgroundMedia from './components/shared/BackgroundMedia';
import BackgroundControl from './components/customize/BackgroundControl';
import GamePods from './components/customize/GamePods';

import { ReactComponent as AppleIco } from './images/icons/apple.svg';
import { ReactComponent as InfoSmlIco } from './images/icons/info-sml.svg';
import { ReactComponent as WindowsIco } from './images/icons/windows.svg';

const Customize = ({ background, setBackground }) => {
  return (
    <>
      <span className={cx('c-key', 'c-key--a')}>
        <span className="c-key__color"> </span>
        <span className="c-key__label">A</span>
      </span>
      <section
        className={cx('c-feat-pg__main', 'gp-main', 'u-custom__preview')}>
        <span className={cx('c-key__group', 'u-custom__title-keys')}>
          <span className={cx('c-key', 'c-key--b')}>
            <span className="c-key__color"> </span>
            <span className="c-key__label">B</span>
          </span>
          <span className={cx('c-key', 'c-key--c')}>
            <span className="c-key__color">Text</span>
            <span className="c-key__label">C</span>
          </span>
        </span>
        <div className={cx('c-feat-pg__title', 'gp-title', 'is-editing')}>
          <h1 className="gp-name">Dawn Racer 2049</h1>
          <div className="gp-meta">
            <ul className={cx('gp-platforms', 'c-platforms')}>
              <li className="c-platform">
                <WindowsIco
                  className={cx('c-platform-ico', 'c-platform-ico--win')}
                />
              </li>
              <li className="c-platform">
                <AppleIco
                  className={cx('c-platform-ico', 'c-platform-ico--mac')}
                />
              </li>
            </ul>
            <ul className={cx('c-tags', 'gp-tags')}>
              <li className={cx('c-tag', 'c-tag--linked')}>
                <span className="c-tag__link">Racing</span>
              </li>
              <li className={cx('c-tag', 'c-tag--linked')}>
                <span className="c-tag__link">Sci-Fi</span>
              </li>
              <li className={cx('c-tag', 'c-tag--linked')}>
                <span className="c-tag__link">Adventure</span>
              </li>
              <li className={cx('c-tag', 'c-tooltip__trigger')}>
                DRM Free
                <InfoSmlIco className="c-tag__ico" />
                <span
                  className={cx(
                    'gp-tags__tooltip',
                    'c-tooltip',
                    'c-tooltip--top'
                  )}>
                  This game does not utilize DRM or require Kartridge to play.
                </span>
              </li>
            </ul>
          </div>
          <div className="gp-actions">
            <span className="gp-buy">
              <button
                className={cx(
                  'gp-buy-btn',
                  'btn--red',
                  'btn--xl',
                  'has-subtag'
                )}>
                <strong>Install</strong>
              </button>
            </span>
          </div>
          <BackgroundControl
            background={background}
            setBackground={setBackground}
          />
        </div>
        <GamePods />
        <BackgroundMedia background={background} />
      </section>
    </>
  );
};

export default Customize;
