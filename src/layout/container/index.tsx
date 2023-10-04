import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../nav';

const Container: React.FC = () => {
  return (
    <div className='mx-auto block w-[375px] h-[812px] md:mt-20 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600'>
      <Nav />
      <div className='max-h-[630px] p-4 rounded-[32px] bg-white h-full text-black'>
        <div className='w-[48px] h-[4px] bg-gradient-to-r text-transparent from-blue-500 via-blue-400 to-blue-600 mx-auto rounded-[10px] ' />
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
