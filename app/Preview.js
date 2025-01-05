import React, { useContext, useState } from 'react';
import { Pods } from './contexts/StorefrontContext';
import BackgroundMedia from './components/shared/BackgroundMedia';
import Gallery from './components/preview/Gallery';
import Text from './components/preview/Text';
import Trailer from './components/preview/Trailer';

const Preview = ({ background }) => {
  const podsState = useContext(Pods);
  const allPods = podsState.state.items;
  const [viewBg, setViewBg] = useState(false);

  return (
    <section className={`c-feat-pg__main gp-main u-custom__preview ${viewBg ? 'is-viewing-bg' : null}`}>
      <span
        className="c-feat-pg__view-bg"
        onBlur={() => { setViewBg(false) }}
        onMouseOver={() => { setViewBg(true) }}
        onMouseOut={() => { setViewBg(false) }}
        onFocus={() => { setViewBg(true) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" alt="" height="30px" width="40px">
          <circle cx="20" cy="14.9" r="5.6" />
          <path d="M0 0v30h40V0H0zm34.9 15.3s-6.4 9.6-14.9 9.6-14.9-9.6-14.9-9.6c-.1-.3-.1-.5 0-.7 0 0 6.4-9.6 14.9-9.6s14.8 9.6 14.8 9.6l.1.1c.1.1.1.4 0 .6z" />
        </svg>
      </span>
      <header className="c-feat-pg__title gp-title">
        <h1 className="gp-name is-selectable">
          <span className="gp-name-txt">
            Test Game
          </span>
        </h1>
        <div className="gp-meta">
          <ul className="c-tags gp-tags">
            <li className="c-tag c-tooltip__trigger">
              DRM Free
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" alt="" className="c-tag__ico" height="15px" width="15px">
                <path d="M5.5 0C2.5 0 0 2.5 0 5.5S2.5 11 5.5 11 11 8.5 11 5.5 8.5 0 5.5 0zm1.2 8.5c0 .6-.5 1.1-1.2 1.1s-1.2-.5-1.2-1.1v-3c0-.6.5-1.1 1.2-1.1s1.2.5 1.2 1.1v3zM5.5 3.6c-.7 0-1.2-.5-1.2-1.1s.5-1.1 1.2-1.1 1.2.5 1.2 1.1-.5 1.1-1.2 1.1z" />
              </svg>
              <span className="gp-tags__tooltip c-tooltip c-tooltip--top">
                This game does not utilize DRM or require Kartridge to play.
              </span>
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
            <span className="c-sml-tooltip">
              Add to Wishlist
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" alt="" className="btn-wishlist-ico--add" height="20px" width="20px">
              <path d="M10 7h6v1h-6zM10 10h6v1h-6zM7 13h9v1H7zM5.3 6h1.3v2.3H9v1.3H6.7V12H5.3V9.7H3V8.3h2.3V6z" />
            </svg>
          </button>
        </div >
      </header >
      <section className="c-feat-pg__sections">
        <div className="c-feat-pg__sections-inner c-tabs gp-body">
          <nav className="gp-tabs gp-tabs--main c-feat-pg__sections-nav c-tabs__nav">
            <ul className="c-tabs__list">
              <li className="c-tabs__item">
                <span className="c-tabs__link disabled active">
                  <span className="c-feat-pg__tab-media">
                    <span className="gp-ico">
                      <video
                        autoPlay
                        className="c-game-ico__video"
                        disableremoteplayback=""
                        loop
                        muted
                        playsInline
                        poster="http://placekitten.com/125/100"
                        preload="none"
                      >
                        <source src="VIDEO_URL" type="video/webm" />
                        <source src="VIDEO_URL" type="video/mp4" />
                      </video>
                    </span>
                  </span>
                  <span className="c-feat-pg__tab-label truncate">
                    About
                  </span>
                </span>
              </li >
              <li className="c-tabs__item">
                <span className="c-tabs__link disabled">
                  <span className="c-rating c-feat-pg__tab-media gp-rating">
                    <span className="c-rating__all c-sml-tooltip-trigger">
                      <svg alt="" className="c-rating__all-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100.1">
                        <path d="M75.1 65.3l6.1 32.3a2.2 2.2 0 0 1-.9 2.1l-1.2.3a3 3 0 0 1-1.2-.3L50 81.6 22 99.7a2 2 0 0 1-2.3 0 2.2 2.2 0 0 1-.9-2.1l6.1-32.3L.6 41.1a2.4 2.4 0 0 1-.5-2.3 2.2 2.2 0 0 1 2-1.3H34L48 1.4a2.1 2.1 0 0 1 4 0l14 36.1h31.9a2.3 2.3 0 0 1 2 1.3 2.4 2.4 0 0 1-.5 2.3z" />
                      </svg>
                      <span className="c-rating__rating">
                        4.38
                      </span>
                      <span className="c-rating__count" >
                        (16 Ratings)
                      </span >
                    </span >
                  </span >
                  <span className="c-feat-pg__tab-label truncate">
                    Reviews
                  </span>
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
                  <span className="c-feat-pg__tab-label truncate">
                    by also_doug
                  </span>
                </span>
              </li>
            </ul>
          </nav>
          <div className="c-tabs__section gp-media is-active">
            <ul className="c-stats gp-stats">
              <li className="c-stats__item">
                <strong className="c-stats__main">
                  Jan 28, 2020
                </strong>
                <span className="c-stats__sec">
                  Updated
                </span>
              </li>
              <li className="c-stats__item c-tooltip__trigger">
                <strong className="c-stats__main">
                  High
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" alt="" className="c-stats__ico" height="15px" width="15px">
                    <path d="M7.5 1C11.1 1 14 3.9 14 7.5S11.1 14 7.5 14 1 11.1 1 7.5 3.9 1 7.5 1m0-1C3.4 0 0 3.4 0 7.5S3.4 15 7.5 15 15 11.6 15 7.5 11.6 0 7.5 0z" />
                    <path d="M6.4 4c0-.1 0-.3.1-.4s.1-.2.2-.3.2-.2.3-.2.3-.1.5-.1.3 0 .4.1.2.1.3.2.2.2.2.3.2.3.2.4 0 .3-.1.4-.1.2-.2.3-.2.1-.4.2-.2.1-.4.1-.3 0-.4-.1-.3-.1-.4-.2-.2-.2-.2-.3-.1-.3-.1-.4zm2.1 8h-2V5.6h2V12z" />
                  </svg>
                </strong>
                <span className="c-stats__sec" >
                  System Reqs
                </span >
                <span className="c-tooltip c-tooltip--top gp-reqs__tooltip" >
                  <dl className="c-subsect" >
                    <dt className="c-subsect__label active" >
                      System Requirements
                      </dt >
                    <dd className="c-subsect__item active" >
                      <dl className="c-requires is-selectable" >
                        <dt className="c-requires__prop" >
                          CPU
                        </dt >
                        <dd className="c-requires__val" >
                          Quad - Core @3.5 GHz or better
                        </dd >
                        <dt className="c-requires__prop" >
                          RAM
                        </dt >
                        <dd className="c-requires__val" >
                          8 GB
                        </dd >
                        <dt className="c-requires__prop" >
                          GPU
                        </dt >
                        <dd className="c-requires__val" >
                          AMD or Nvidia GPU with 4 GB of VRAM or more
                        </dd >
                        <dt className="c-requires__prop" >
                          OS
                        </dt >
                        <dd className="c-requires__val" >
                          Windows 7, MacOS 10.8
                        </dd >
                        <dt className="c-requires__prop" >
                          Storage
                        </dt >
                        <dd className="c-requires__val" >
                          3.07GB on Windows, 3.09GB on macOS
                        </dd >
                        <dt className="c-requires__prop" >
                          DRM
                        </dt >
                        <dd className="c-requires__val" >
                          This game does not utilize DRM or require Kartridge to play.
                        </dd >
                      </dl >
                    </dd >
                  </dl >
                </span >
              </li >
            </ul >
            {allPods.map((pod, id) => {
              if (pod.type === 'gallery') {
                return <Gallery key={id} layout={pod.layout} images={pod.images} />;
              }
              if (pod.type === 'trailer') {
                return <Trailer key={id} url={pod.url} />;
              }
              if (pod.type === 'text') {
                return <Text key={id} text={pod.text} />;
              }
              return;
            })}
          </div>
        </div>
      </section>
      <BackgroundMedia background={background} />
    </section>
  );
}

export default Preview;
