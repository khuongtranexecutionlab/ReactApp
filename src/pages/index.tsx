import React from 'react';

const Home = React.lazy(async () => await import('./home'));
const Detail = React.lazy(async () => await import('./detail'));
const Quiz = React.lazy(async () => await import('./quiz'));

export interface PagesComponent extends React.FC {
  Home: typeof Home;
  Detail: typeof Detail;
  Quiz: typeof Quiz;
}

const Pages: PagesComponent = () => null;

Pages.Home = Home;
Pages.Detail = Detail;
Pages.Quiz = Quiz;

export default Pages;
