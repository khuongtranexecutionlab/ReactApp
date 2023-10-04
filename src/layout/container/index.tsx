import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';

const Container: React.FC = () => {
  return (
    <div className='mx-auto block w-[375px] h-[812px] mt-20 p-[20px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600'>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Container;
