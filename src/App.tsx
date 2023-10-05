import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Layout from './layout';
import Pages from './pages';

const PATH_HOME = '/';
const PATH_DETAIL = '/detail';
const PATH_QUIZ = '/quiz';
const PATH_LOGIN = '/login';

const MyRoutes: RouteObject[] = [
  {
    element: <Layout.Container />,
    children: [
      {
        path: PATH_LOGIN,
        element: <Pages.Login />
      },
      {
        path: PATH_HOME,
        element: <Pages.Home />
      },
      {
        path: PATH_DETAIL,
        element: <Pages.Detail />
      },
      {
        path: PATH_QUIZ,
        element: <Pages.Quiz />
      }
    ]
  }
];

export default MyRoutes;
