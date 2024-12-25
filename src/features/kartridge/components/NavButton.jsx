import clsx from 'clsx';
import React from 'react';

import LabelHighlight from '../assets/images/navigation/label-highlight.svg?react';

export default class NavButton extends React.Component {
    state = { isPlaying: false };

    playIcon = () => {
        if (!this.state.isPlaying) this.setState({ isPlaying: true });
    };

    resetIcon = () => this.setState({ isPlaying: false });

    render() {
        const isActive = this.props.label === 'Publish';
        const buttonClasses = clsx('ap-nav__action', `ap-nav__${this.props.label.toLowerCase()}`, {
            active: isActive,
            'is-playing': this.state.isPlaying,
        });

        return (
            <a
                className={buttonClasses}
                onFocus={this.playIcon}
                onMouseOver={this.playIcon}
                title={this.props.label}
            >
                <span className="ap-nav__ico--dark" onAnimationEnd={this.resetIcon}></span>
                <span className="ap-nav__ico--light"></span>
                <strong className="ap-nav__label">
                    {this.props.label}
                    <LabelHighlight className="ap-nav__highlight" />
                </strong>
            </a>
        );
    }
}
