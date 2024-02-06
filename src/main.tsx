import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './app/App';

import ProviderWrapper from '@/providers/ProviderWrapper';

const isProd = import.meta.env.PROD;

ReactDOM.createRoot(document.getElementById('root')!).render(
  isProd ? (
    <React.StrictMode>
      <ProviderWrapper>
        <App />
      </ProviderWrapper>
    </React.StrictMode>
  ) : (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  ),
);
