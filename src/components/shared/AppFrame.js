import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

const AppFrame = ({ children }) => {
  const [showWarning, setShowWarning] = useState(false);
  const frame = useRef();

  useEffect(() => {
    if (!frame.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      const isTooSmall = rect.height < 680 || rect.width < 1200;
      setShowWarning(isTooSmall);
    });

    if (frame.current.offsetHeight < 680 || frame.current.offsetWidth < 1200)
      setShowWarning(true);

    resizeObserver.observe(frame.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      {showWarning ? (
        <article className="ap-size-warning">
          <h1>Please increase the size of your browser window</h1>
          <p>
            This demo requires a minimum window size of{' '}
            <strong>1,200 px by 680 px</strong>. This is due to limitations that
            were present within the Kartridge app.
          </p>
        </article>
      ) : null}
      <div
        className={cx(
          'ap-frame',
          'is-authentic',
          'is-app',
          'r-upload',
          'sr-customize'
        )}
        ref={frame}>
        {children}
      </div>
    </>
  );
};

export default AppFrame;
