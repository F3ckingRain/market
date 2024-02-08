import React, { lazy, Suspense } from 'react';

import { useOutlet } from 'react-router-dom';

import { Preloader } from '@/ui/Loader/Loader';

const Header = lazy(() => import('@/components/Header/Header'));
const Footer = lazy(() => import('@/components/Footer/Footer'));

function DefaultLayout() {
  const outlet = useOutlet();

  return (
    <Suspense fallback={<Preloader text={'Идёт загрузка страницы'} active={true} />}>
      <Header />

      {outlet}

      <Footer />
    </Suspense>
  );
}

export default DefaultLayout;
