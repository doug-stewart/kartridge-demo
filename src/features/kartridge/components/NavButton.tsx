import clsx from 'clsx';
import { useState } from 'react';

import LabelHighlight from '../assets/images/label-highlight.svg?react';

const NavButton = ({ label }: { label: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playIcon = () => {
        if (!isPlaying) setIsPlaying(true);
    };

    const resetIcon = () => setIsPlaying(false);

    const isActive = label === 'Publish';
    const buttonClasses = clsx('ap-nav__action', `ap-nav__${label.toLowerCase()}`, {
        active: isActive,
        'is-playing': isPlaying,
    });

    return (
        <a className={buttonClasses} onFocus={playIcon} onMouseOver={playIcon} title={label}>
            <span className="ap-nav__ico--dark" onAnimationEnd={resetIcon}></span>
            <span className="ap-nav__ico--light"></span>
            <strong className="ap-nav__label">
                {label}
                <LabelHighlight className="ap-nav__highlight" />
            </strong>
        </a>
    );
};

export default NavButton;
