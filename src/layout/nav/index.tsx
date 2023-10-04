import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from './title';
import View from './view';

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <View path={pathname} />
      <Title path={pathname} />
    </React.Fragment>
  );
};

export default Nav;
