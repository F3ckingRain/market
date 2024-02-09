import React from 'react';

import CardContainer from '@/containers/CardContainer/CardContainer';
import Wrapper from '@/containers/Wrapper/Wrapper';
import CardsModel from '@/models/CardsModel/CardsModel';

function HomePage() {
  const { cardsState } = CardsModel();

  return (
    <>
      <Wrapper>
        <CardContainer title={'Самые популярные'} cards={cardsState.mostPopular} />
      </Wrapper>

      <Wrapper>
        <div>text</div>
      </Wrapper>

      <Wrapper>
        <CardContainer title={'Забрать сегодня'} cards={cardsState.getToday} />
      </Wrapper>
    </>
  );
}

export default HomePage;
