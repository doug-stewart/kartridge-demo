import React from 'react';

export default class NavButton extends React.Component {
  state = { isPlaying: false }

  playIcon = () => {
    if (!this.state.isPlaying) this.setState({ isPlaying: true });
  }

  resetIcon = () => this.setState({ isPlaying: false });

  render() {
    const isActive = this.props.label === 'Publish';

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        onFocus={this.playIcon}
        onMouseOver={this.playIcon}
        title={this.props.label} className={`
          ap-nav__action
          ap-nav__${this.props.label.toLowerCase()}
          ${isActive ? 'active' : ''}
          ${this.state.isPlaying ? 'is-playing' : ''}
        `}
      >
        <span className="ap-nav__ico--dark" onAnimationEnd={this.resetIcon}></span>
        <span className="ap-nav__ico--light"></span>
        <strong className="ap-nav__label">
          {this.props.label}
          <svg className="ap-nav__highlight" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 106 22" height="22px" width="106px">
            <path className="ap-nav__highlight--bottom" d="M98 22H0V0h98l8 11z" />
            <path className="ap-nav__highlight--top" d="M98 22H0V0h98l8 11z" />
          </svg>
        </strong>
      </a>
    );
  }
}