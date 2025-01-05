import React from 'react';
import BackgroundMedia from './components/shared/BackgroundMedia';
import BackgroundControl from './components/customize/BackgroundControl';
import GamePods from './components/customize/GamePods';

const Customize = ({ background, setBackground }) => {
  return (
    <>
      <span className="c-key c-key--a">
        <span className="c-key__color"> </span>
        <span className="c-key__label">A</span>
      </span>
      <section className="c-feat-pg__main gp-main u-custom__preview">
        <span className="c-key__group u-custom__title-keys">
          <span className="c-key c-key--b">
            <span className="c-key__color"> </span>
            <span className="c-key__label">B</span>
          </span>
          <span className="c-key c-key--c">
            <span className="c-key__color">Text</span>
            <span className="c-key__label">C</span>
          </span>
        </span>
        <div className="c-feat-pg__title gp-title is-editing">
          <h1 className="gp-name">Ghost In The Shell: Arise</h1>
          <div className="gp-meta">
            <ul className="c-tags gp-tags">
              <li className="c-tag c-tag--linked">
                <span className="c-tag__link">Action</span>
              </li>
              <li className="c-tag c-tag--linked">
                <span className="c-tag__link">Shooter</span>
              </li>
            </ul>
          </div>
          <div className="gp-actions">
            <span className="gp-buy">
              <button className="gp-buy-btn btn--red btn--xl has-subtag">
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
