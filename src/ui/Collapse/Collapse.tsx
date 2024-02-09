import React, { FC, memo, useCallback, useState } from 'react';

import styles from './Collapse.module.scss';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: FC<CollapseProps> = memo(({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const clickHandler = useCallback(() => {
    setOpen(s => !s);
  }, []);

  return (
    <button className={styles.collapse} onClick={clickHandler} type={'button'}>
      <h2 className={styles.collapse__title}>{title}</h2>

      <div
        className={open ? `${styles.content} ${styles.content__open}` : styles.content}
      >
        {children}
      </div>

      <button className={open ? `${styles.arrow} ${styles.arrow__open}` : styles.arrow} />
    </button>
  );
});

export default Collapse;
