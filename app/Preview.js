import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Pods } from './contexts/StorefrontContext';
import BackgroundMedia from './components/shared/BackgroundMedia';
import Gallery from './components/preview/Gallery';
import Text from './components/preview/Text';
import Trailer from './components/preview/Trailer';

import AppleIco from '../public/assets/icons/apple.svg';
import InfoIco from '../public/assets/icons/info.svg';
import InfoSmlIco from '../public/assets/icons/info-sml.svg';
import PreviewIco from '../public/assets/icons/preview.svg';
import StarIco from '../public/assets/icons/star.svg';
import WindowsIco from '../public/assets/icons/windows.svg';
import WishIco from '../public/assets/icons/wishlist.svg';

const Preview = ({ background }) => {
  const podsState = useContext(Pods);
  const allPods = podsState.state.items;
  const [viewBg, setViewBg] = useState(false);
  const mainClasses = classNames('c-feat-pg__main', 'gp-main', 'u-custom__preview', { 'is-viewing-bg': viewBg });

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
      <header className="c-feat-pg__title gp-title">
        <h1 className="gp-name is-selectable">
          <span className="gp-name-txt">Test Game</span>
        </h1>
        <div className="gp-meta">
          <ul className="gp-platforms c-platforms">
            <li className="c-platform">
              <WindowsIco className="c-platform-ico c-platform-ico--win" />
            </li>
            <li className="c-platform">
              <AppleIco className="c-platform-ico c-platform-ico--win" />
            </li>
          </ul>
          <ul className="c-tags gp-tags">
            <li className="c-tag c-tooltip__trigger">
              DRM Free
              <InfoSmlIco className="c-tag__ico" />
              <span className="gp-tags__tooltip c-tooltip c-tooltip--top">This game does not utilize DRM or require Kartridge to play.</span>
            </li>
          </ul>
        </div>
        <div className="gp-actions">
          <span className="gp-buy">
            <button className="gp-buy-btn btn--red btn--xl has-subtag">
              <strong>Buy</strong> for <strong>$24.99</strong>
            </button>
          </span>
          <button className="btn-ico-action btn-ico-action--wishlist c-sml-tooltip-trigger" type="submit">
            <span className="c-sml-tooltip">Add to Wishlist</span>
            <WishIco className="btn-wishlist-ico--add" />
          </button>
        </div>
      </header>
      <section className="c-feat-pg__sections">
        <div className="c-feat-pg__sections-inner c-tabs gp-body">
          <nav className="gp-tabs gp-tabs--main c-feat-pg__sections-nav c-tabs__nav">
            <ul className="c-tabs__list">
              <li className="c-tabs__item">
                <span className="c-tabs__link disabled active">
                  <span className="c-feat-pg__tab-media">
                    <span className="gp-ico">
                      <video autoPlay className="c-game-ico__video" disableremoteplayback="" loop muted playsInline poster="game-icon.png" preload="none" />
                    </span>
                  </span>
                  <span className="c-feat-pg__tab-label truncate">About</span>
                </span>
              </li>
              <li className="c-tabs__item">
                <span className="c-tabs__link disabled">
                  <span className="c-rating c-feat-pg__tab-media gp-rating">
                    <span className="c-rating__all c-sml-tooltip-trigger">
                      <StarIco className="c-rating__all-star" />
                      <span className="c-rating__rating">4.38</span>
                      <span className="c-rating__count">(16 Ratings)</span>
                    </span>
                  </span>
                  <span className="c-feat-pg__tab-label truncate">Reviews</span>
                </span>
              </li>
              <li className="c-tabs__item">
                <span className="c-tabs__link c-avatar-trigger disabled">
                  <span className="c-feat-pg__tab-media">
                    <span className="gp-body__dev-avatar c-avatar c-avatar--sml gp-body__dev-avatar">
                      <span className="c-avatar__media c-avatar__character" style={{ backgroundImage: "url('https://placekitten.com/40/40')" }} />
                      <span className="c-avatar__media c-avatar__background" style={{ backgroundImage: "url('https://placekitten.com/40/40')" }} />
                    </span>
                  </span>
                  <span className="c-feat-pg__tab-label truncate">by also_doug</span>
                </span>
              </li>
            </ul>
          </nav>
          <div className="c-tabs__section gp-media is-active">
            <ul className="c-stats gp-stats">
              <li className="c-stats__item">
                <strong className="c-stats__main">Jan 28, 2020</strong>
                <span className="c-stats__sec">Updated</span>
              </li>
              <li className="c-stats__item c-tooltip__trigger">
                <strong className="c-stats__main">
                  High
                  <InfoIco className="c-stats__ico" />
                </strong>
                <span className="c-stats__sec">System Reqs</span>
                <span className="c-tooltip c-tooltip--top gp-reqs__tooltip">
                  <dl className="c-subsect">
                    <dt className="c-subsect__label active">System Requirements</dt>
                    <dd className="c-subsect__item active">
                      <dl className="c-requires is-selectable">
                        <dt className="c-requires__prop">CPU</dt>
                        <dd className="c-requires__val">Quad - Core @3.5 GHz or better</dd>
                        <dt className="c-requires__prop">RAM</dt>
                        <dd className="c-requires__val">8 GB</dd>
                        <dt className="c-requires__prop">GPU</dt>
                        <dd className="c-requires__val">AMD or Nvidia GPU with 4 GB of VRAM or more</dd>
                        <dt className="c-requires__prop">OS</dt>
                        <dd className="c-requires__val">Windows 7, MacOS 10.8</dd>
                        <dt className="c-requires__prop">Storage</dt>
                        <dd className="c-requires__val">3.07GB on Windows, 3.09GB on macOS</dd>
                        <dt className="c-requires__prop">DRM</dt>
                        <dd className="c-requires__val">This game does not utilize DRM or require Kartridge to play.</dd>
                      </dl>
                    </dd>
                  </dl>
                </span>
              </li>
            </ul>
            {allPods.map(pod => {
              if (pod.type === 'gallery') {
                return <Gallery key={getPodKey()} layout={pod.layout} images={pod.images} />;
              }
              if (pod.type === 'trailer') {
                return <Trailer key={getPodKey()} url={pod.url} />;
              }
              if (pod.type === 'text') {
                return <Text key={getPodKey()} text={pod.text} />;
              }
              return;
            })}
          </div>
        </div>
      </section>
      <BackgroundMedia background={background} />
    </section>
  );
};

export default Preview;
