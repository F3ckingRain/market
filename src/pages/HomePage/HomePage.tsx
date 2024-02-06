import React from 'react';

import ProductList from '@/components/ProductList/ProductList';
import Wrapper from '@/containers/Wrapper/Wrapper';

function HomePage() {
  return (
    <Wrapper>
      <ProductList />
    </Wrapper>
  );
}

export default HomePage;
