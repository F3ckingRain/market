import React, { Suspense } from 'react';

import { useOutlet } from 'react-router-dom';

import { Preloader } from '@/ui/Loader/Loader';

function DefaultLayout() {
  const outlet = useOutlet();

  return (
    <Suspense fallback={<Preloader text={'Идёт загрузка страницы'} active={true} />}>
      {outlet}
    </Suspense>
  );
}

export default DefaultLayout;
