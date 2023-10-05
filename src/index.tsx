import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import routes from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </PersistGate>
  </Provider>
);
