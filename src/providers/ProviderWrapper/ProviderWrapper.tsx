import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ProviderProps } from '@/providers/ProviderWrapper/index';

function ProviderWrapper({ children }: ProviderProps) {
  return (
    <BrowserRouter>
      <RecoilRoot>{children}</RecoilRoot>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
