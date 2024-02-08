import React from 'react';

import styles from './Footer.module.scss';

import { thisYear } from '@/constants/date';

function Footer() {
  return <footer className={styles.footer}>@Copyright 2023-{thisYear}</footer>;
}

export default Footer;
