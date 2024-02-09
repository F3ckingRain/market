import React, { Suspense } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { fullCardsList } from '@/store/recoil/cardsState';
import { Preloader } from '@/ui/Loader/Loader';
import { getIdFromUrl } from '@/utils/url';

function ProductLayout() {
  const { pathname } = useLocation();

  const id = Number(getIdFromUrl(pathname));

  const productById = fullCardsList.find(el => el.id === id)!;

  return (
    <Suspense fallback={<Preloader text={'Идёт загрузка товара'} active={true} />}>
      <Outlet context={productById} />
    </Suspense>
  );
}

export default ProductLayout;
