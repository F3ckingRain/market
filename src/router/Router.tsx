import React from 'react';

import { useRoutes, RouteObject } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [],
  },
];

export default function Router() {
  return useRoutes(routes);
}
