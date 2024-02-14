import React from 'react';

import { useOutletContext } from 'react-router-dom';

import CardOpen from '@/components/CardOpen/CardOpen';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { CardItemType } from '@/types/card';

function ProductPage() {
  const params = useOutletContext<CardItemType>();

  return (
    <>
      <Wrapper>
        <CardOpen {...params} />
      </Wrapper>

      <Wrapper>similar</Wrapper>
    </>
  );
}

export default ProductPage;
