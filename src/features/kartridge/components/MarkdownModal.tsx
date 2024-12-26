import clsx from 'clsx';

import Modal from './Modal';

type MarkdownModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

const MarkdownModal = ({ isOpen, closeModal }: MarkdownModalProps) => {
    return (
        <Modal innerClass="m-markdown" openState={isOpen} toggleCallback={closeModal}>
            <article className={clsx('c-modal__content', 'm-markdown__guide', 'is-selectable')}>
                <h1>Formatting text with Markdown</h1>
                <p>
                    The text pods support a wide array of Markdown features for text formatting.
                    Below is a quick primer for those who are new to Markdown. For more information
                    refer to{' '}
                    <a href="https://guides.github.com/features/mastering-markdown/">
                        our documentation
                    </a>
                    .
                </p>
                <h2>Headings</h2>
                <pre>
                    <code>{`## Heading level 1
### Heading level 2
#### Heading level 3
##### Heading level 4
###### Heading level 5`}</code>
                </pre>
                <h2>Inline styling</h2>
                <dl>
                    <dt>Link</dt>
                    <dd>
                        <code>[text](https://www.kartridge.com/)</code>
                    </dd>
                    <dt>Image</dt>
                    <dd>
                        <code>![Alt text](https://www.site.com/image.jpg)</code>
                    </dd>
                    <dt>Bold</dt>
                    <dd>
                        <strong>
                            <code>**bold**</code>
                        </strong>
                    </dd>
                    <dt>Italic</dt>
                    <dd>
                        <em>
                            <code>*italic*</code>
                        </em>
                        or
                        <em>
                            <code>_italic_</code>
                        </em>
                    </dd>
                </dl>
                <h2>Lists</h2>
                <h3>Bulleted List</h3>
                <pre>
                    <code>{`- Bulleted list item
- Bulleted list item
  - Nested bulleted list item
- Bulleted list item
  Multi-line content`}</code>
                </pre>
                <h3>Numbered List</h3>
                <pre>
                    <code>{`1. Numbered list item
2. Numbered list item
  1. Nested numbered list item
3. Numbered list item
  Multi-line content`}</code>
                </pre>
                <h2>Tables</h2>
                <pre>
                    <code>{`| header | header | header |
|--------|--------|--------|
| cell   | cell   | cell   |
| cell   | cell   | cell   |`}</code>
                </pre>
                <h2>Quotes</h2>
                <pre>
                    <code>{`> The body of a quote goes here.
> > They can even be nested
> They also can be multi-line.`}</code>
                </pre>
            </article>
        </Modal>
    );
};

export default MarkdownModal;
