import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ModalProvider from '@/providers/ModalProvider/ModalProvider';
import { ProviderProps } from '@/providers/ProviderWrapper/index';

function ProviderWrapper({ children }: ProviderProps) {
  return (
    <BrowserRouter>
      <RecoilRoot>
        {children}
        <ModalProvider />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default ProviderWrapper;
