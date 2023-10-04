import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Pages from './pages';

const MyRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Pages.Home />
  },
  {
    path: '/detail',
    element: <Pages.Detail />
  },
  {
    path: '/quiz',
    element: <Pages.Quiz />
  }
];

export default MyRoutes;
