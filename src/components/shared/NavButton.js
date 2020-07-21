import React from 'react';
import classNames from 'classnames';
import { ReactComponent as LabelHighlight } from '../../images/navigation/label-highlight.svg';

export default class NavButton extends React.Component {
  state = { isPlaying: false };

  playIcon = () => {
    if (!this.state.isPlaying) this.setState({ isPlaying: true });
  };

  resetIcon = () => this.setState({ isPlaying: false });

  render() {
    const isActive = this.props.label === 'Publish';
    const buttonClasses = classNames(
      'ap-nav__action',
      `ap-nav__${this.props.label.toLowerCase()}`,
      { active: isActive, 'is-playing': this.state.isPlaying }
    );

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        className={buttonClasses}
        onFocus={this.playIcon}
        onMouseOver={this.playIcon}
        title={this.props.label}>
        <span
          className="ap-nav__ico--dark"
          onAnimationEnd={this.resetIcon}></span>
        <span className="ap-nav__ico--light"></span>
        <strong className="ap-nav__label">
          {this.props.label}
          <LabelHighlight className="ap-nav__highlight" />
        </strong>
      </a>
    );
  }
}
