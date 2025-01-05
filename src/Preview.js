import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { Pods } from './contexts/StorefrontContext';
import BackgroundMedia from './components/shared/BackgroundMedia';
import Gallery from './components/preview/Gallery';
import Text from './components/preview/Text';
import Trailer from './components/preview/Trailer';

import { ReactComponent as AppleIco } from './images/icons/apple.svg';
import { ReactComponent as InfoIco } from './images/icons/info.svg';
import { ReactComponent as InfoSmlIco } from './images/icons/info-sml.svg';
import { ReactComponent as PreviewIco } from './images/icons/preview.svg';
import { ReactComponent as StarIco } from './images/icons/star.svg';
import { ReactComponent as WindowsIco } from './images/icons/windows.svg';
import { ReactComponent as WishIco } from './images/icons/wishlist.svg';

const Preview = ({ background }) => {
  const podsState = useContext(Pods);
  const allPods = podsState.state;
  const [viewBg, setViewBg] = useState(false);
  const mainClasses = cx('c-feat-pg__main', 'gp-main', 'u-custom__preview', {
    'is-viewing-bg': viewBg,
  });

  let podKey = 1;

  const getPodKey = () => {
    return podKey++;
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
        }}>
        <PreviewIco className="c-feat-pg__view-bg__ico" />
      </span>
      <header className={cx('c-feat-pg__title', 'gp-title')}>
        <h1 className={cx('gp-name', 'is-selectable')}>
          <span className="gp-name-txt">Test Game</span>
        </h1>
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
              <span className="c-tag__link">Action</span>
            </li>
            <li className={cx('c-tag', 'c-tag--linked')}>
              <span className="c-tag__link">Shooter</span>
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
              className={cx('gp-buy-btn', 'btn--red', 'btn--xl', 'has-subtag')}>
              <strong>Buy</strong> for <strong>$24.99</strong>
            </button>
          </span>
          <button
            className={cx(
              'btn-ico-action',
              'btn-ico-action--wishlist',
              'c-sml-tooltip-trigger'
            )}
            type="submit">
            <span className="c-sml-tooltip">Add to Wishlist</span>
            <WishIco className="btn-wishlist-ico--add" />
          </button>
        </div>
      </header>
      <section className="c-feat-pg__sections">
        <div className={cx('c-feat-pg__sections-inner', 'c-tabs', 'gp-body')}>
          <nav
            className={cx(
              'gp-tabs',
              'gp-tabs--main',
              'c-feat-pg__sections-nav',
              'c-tabs__nav'
            )}>
            <ul className="c-tabs__list">
              <li className="c-tabs__item">
                <span className={cx('c-tabs__link', 'disabled', 'active')}>
                  <span className="c-feat-pg__tab-media">
                    <span className="gp-ico">
                      <video
                        autoPlay
                        className="c-game-ico__trailer"
                        disableremoteplayback=""
                        loop
                        muted
                        playsInline
                        poster="/game/game-icon.png"
                        preload="none"
                      />
                    </span>
                  </span>
                  <span className={cx('c-feat-pg__tab-label', 'truncate')}>
                    About
                  </span>
                </span>
              </li>
              <li className="c-tabs__item">
                <span className={cx('c-tabs__link', 'disabled')}>
                  <span
                    className={cx(
                      'c-rating',
                      'c-feat-pg__tab-media',
                      'gp-rating'
                    )}>
                    <span
                      className={cx('c-rating__all', 'c-sml-tooltip-trigger')}>
                      <StarIco className="c-rating__all-star" />
                      <span className="c-rating__rating">4.38</span>
                      <span className="c-rating__count">(16 Ratings)</span>
                    </span>
                  </span>
                  <span className={cx('c-feat-pg__tab-label', 'truncate')}>
                    Reviews
                  </span>
                </span>
              </li>
              <li className="c-tabs__item">
                <span
                  className={cx(
                    'c-tabs__link',
                    'c-avatar-trigger',
                    'disabled'
                  )}>
                  <span className="c-feat-pg__tab-media">
                    <span
                      className={cx(
                        'gp-body__dev-avatar',
                        'c-avatar',
                        'c-avatar--sml',
                        'gp-body__dev-avatar'
                      )}>
                      <span
                        className={cx('c-avatar__media', 'c-avatar__character')}
                      />
                      <span
                        className={cx(
                          'c-avatar__media',
                          'c-avatar__background'
                        )}
                        style={{
                          backgroundImage: "url('/game/dev-avatar.png')",
                        }}
                      />
                    </span>
                  </span>
                  <span className={cx('c-feat-pg__tab-label', 'truncate')}>
                    by also_doug
                  </span>
                </span>
              </li>
            </ul>
          </nav>
          <div className={cx('c-tabs__section', 'gp-media', 'is-active')}>
            <ul className={cx('c-stats', 'gp-stats')}>
              <li className="c-stats__item">
                <strong className="c-stats__main">Jan 28, 2020</strong>
                <span className="c-stats__sec">Updated</span>
              </li>
              <li className={cx('c-stats__item', 'c-tooltip__trigger')}>
                <strong className="c-stats__main">
                  High
                  <InfoIco className="c-stats__ico" />
                </strong>
                <span className="c-stats__sec">System Reqs</span>
                <span
                  className={cx(
                    'c-tooltip',
                    'c-tooltip--top',
                    'gp-reqs__tooltip'
                  )}>
                  <dl className="c-subsect">
                    <dt className={cx('c-subsect__label', 'active')}>
                      System Requirements
                    </dt>
                    <dd className={cx('c-subsect__item', 'active')}>
                      <dl className={cx('c-requires', 'is-selectable')}>
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
                          This game does not utilize DRM or require Kartridge to
                          play.
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
