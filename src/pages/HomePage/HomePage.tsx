import React from 'react';

import CardContainer from '@/containers/CardContainer/CardContainer';
import Wrapper from '@/containers/Wrapper/Wrapper';
import CardsModel from '@/models/CardsModel/CardsModel';
import useThemeState from '@/store/recoil/configState/configState';
import styles from '@/styles/main.module.scss';

function HomePage() {
  const [{ theme }] = useThemeState();

  const { cardsState } = CardsModel();

  return (
    <main className={`${styles.main} ${styles[`main__${theme}`]}`}>
      <Wrapper>
        <CardContainer title={'Самые популярные'} cards={cardsState.mostPopular} />
      </Wrapper>

      <Wrapper>
        <div>text</div>
      </Wrapper>

      <Wrapper>
        <CardContainer title={'Забрать сегодня'} cards={cardsState.getToday} />
      </Wrapper>
    </main>
  );
}

export default HomePage;
