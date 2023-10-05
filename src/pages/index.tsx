import React from 'react';

const Home = React.lazy(async () => await import('./home'));
const Detail = React.lazy(async () => await import('./detail'));
const Quiz = React.lazy(async () => await import('./quiz'));
const Login = React.lazy(async () => await import('./login'));

export interface PagesComponent extends React.FC {
  Home: typeof Home;
  Detail: typeof Detail;
  Quiz: typeof Quiz;
  Login: typeof Login;
}

const Pages: PagesComponent = () => null;

Pages.Home = Home;
Pages.Detail = Detail;
Pages.Login = Login;
Pages.Quiz = Quiz;

export default Pages;
