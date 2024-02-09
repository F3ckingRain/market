import React from 'react';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logoContainer}>
          <div>a</div>
          <div>d</div>
        </div>

        <div className={styles.center}>c</div>

        <div className={styles.logoContainer}>
          <div>c</div>
          <div>f</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
