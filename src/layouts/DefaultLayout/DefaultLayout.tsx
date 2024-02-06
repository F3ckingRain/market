import React, { Suspense } from 'react';

import { useOutlet } from 'react-router-dom';

function DefaultLayout() {
  const outlet = useOutlet();

  return <Suspense fallback={'Загрузка'}>{outlet}</Suspense>;
}

export default DefaultLayout;
