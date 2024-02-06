import React, { FC, memo } from 'react';

import styles from './Loader.module.scss';

interface LoaderProps {
  text: string;
}

const Loader: FC<LoaderProps> = memo(({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div>
          <div>
            <div />
          </div>
        </div>
      </div>

      <span className={styles.text}>{text}</span>
    </div>
  );
});

export default Loader;
