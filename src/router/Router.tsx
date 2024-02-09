import React, { lazy } from 'react';

import { useRoutes, RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';
import ProductLayout from '@/layouts/ProductLayout/ProductLayout';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/product',
    element: <ProductLayout />,
    children: [{ path: '*', element: <ProductPage /> }],
  },
];

export default function Router() {
  return useRoutes(routes);
}
