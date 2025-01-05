import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import type { PodObj } from '../types';

type GamePodProps = PropsWithChildren & {
    pod: PodObj;
    isFirst: boolean;
    isLast: boolean;
    podClass: string;
    movePodUp: (pod: PodObj) => void;
    movePodDown: (pod: PodObj) => void;
    removePod: (pod: PodObj) => void;
};

const GamePod = ({
    pod,
    isFirst,
    isLast,
    children,
    podClass,
    movePodUp,
    movePodDown,
    removePod,
}: GamePodProps) => {
    return (
        <li className={clsx('c-media__container', podClass)}>
            <header className="c-media__header">
                <button
                    className="c-media__move-up"
                    disabled={isFirst}
                    onClick={() => movePodUp(pod)}
                    title="Move pod up one spot"
                />
                <button
                    className="c-media__move-down"
                    disabled={isLast}
                    onClick={() => movePodDown(pod)}
                    title="Move pod down one spot"
                />
                <span className="c-media__drag-label">Drag to re-order</span>
                <button
                    className="c-media__remove"
                    onClick={() => removePod(pod)}
                    title="Remove this pod"
                >
                    ×
                </button>
            </header>
            {children}
        </li>
    );
};

export default GamePod;
