import React from 'react';

import { useOutlet } from 'react-router-dom';

function DefaultLayout() {
  const outlet = useOutlet();

  return <>{outlet}</>;
}

export default DefaultLayout;
