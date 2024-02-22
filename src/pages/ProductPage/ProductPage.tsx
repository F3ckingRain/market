import React from 'react';

import { useOutletContext } from 'react-router-dom';

import CardOpen from '@/components/CardOpen/CardOpen';
import Wrapper from '@/containers/Wrapper/Wrapper';
import useThemeState from '@/store/recoil/configState/configState';
import styles from '@/styles/main.module.scss';
import { CardItemType } from '@/types/card';

function ProductPage() {
  const params = useOutletContext<CardItemType>();

  const [{ theme }] = useThemeState();

  return (
    <main className={`${styles.main} ${styles[`main__${theme}`]}`}>
      <Wrapper>
        <CardOpen {...params} />
      </Wrapper>

      <Wrapper>similar</Wrapper>
    </main>
  );
}

export default ProductPage;
