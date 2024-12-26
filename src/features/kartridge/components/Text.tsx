import clsx from 'clsx';
import Markdown from 'react-markdown';

const Text = ({ text }: { text: string }) => (
    <div className={clsx('gp-media__text', 'is-selectable', 'c-local-reset')}>
        <Markdown>{text}</Markdown>
    </div>
);

export default Text;
