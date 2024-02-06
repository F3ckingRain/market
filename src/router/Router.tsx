import React, { lazy } from 'react';

import { useRoutes, RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));

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
];

export default function Router() {
  return useRoutes(routes);
}
