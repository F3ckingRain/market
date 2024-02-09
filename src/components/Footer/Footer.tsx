import React from 'react';

import styles from './Footer.module.scss';

import { footerLinks } from '@/components/Footer/index';
import { thisYear } from '@/constants/date';
import useConfigState from '@/store/recoil/configState/configState';
import Collapse from '@/ui/Collapse/Collapse';

function Footer() {
  const [{ viewport }] = useConfigState();
  const isMobile = viewport === 'mobile';

  return (
    <footer className={styles.footer}>
      <div className={styles.mainSection}>
        <div className={styles.mainSection__header}>
          <div>
            <h2>name</h2>
            <div>address</div>
          </div>

          <div>telegram</div>
        </div>

        <div className={styles.mainSection__links}>
          {footerLinks.map((el, index) =>
            isMobile ? (
              <Collapse title={el.title} key={`${el.title}_${index + 1}`}>
                <ul className={styles.links}>
                  {el.links.map((link, i) => (
                    <li key={`${link.link}_${i + 1}`}>
                      <button>{link.path}</button>
                    </li>
                  ))}
                </ul>
              </Collapse>
            ) : (
              <div key={`${el.title}_${index + 1}`}>
                <h3>{el.title}</h3>

                <ul className={styles.links}>
                  {el.links.map((link, i) => (
                    <li key={`${link.link}_${i + 1}`}>
                      <button>{link.path}</button>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>

      <div className={styles.copyright}>@Copyright 2023-{thisYear}</div>
    </footer>
  );
}

export default Footer;
