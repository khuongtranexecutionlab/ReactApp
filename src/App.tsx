import React from 'react';
import { Link, Outlet, type RouteObject } from 'react-router-dom';
import Layout from './layout';
import Pages from './pages';
import Demo from './pages/demo';

const PATH_HOME = '/';
const PATH_DETAIL = '/detail';
const PATH_QUIZ = '/quiz';
const PATH_LOGIN = '/login';
const PATH_DEMO = '/demo';
const PATH_SWR = '/demo/swr';
const PATH_QUERY = '/demo/query';

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
  },
  {
    path: PATH_DEMO,
    element: (
      <React.Fragment>
        <div className='flex justify-center gap-10 mt-10'>
          <Link to='/demo/swr' className='text-blue-400'>
            SWR
          </Link>
          <Link to='/demo/query' className='text-blue-400'>
            REACT QUERY
          </Link>
        </div>
        <Outlet />
      </React.Fragment>
    ),
    children: [
      { path: PATH_SWR, element: <Demo.SWR /> },
      { path: PATH_QUERY, element: <Demo.QUERY /> }
    ]
  }
];

export default MyRoutes;
