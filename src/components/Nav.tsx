import React from 'react';
import { useLocation } from 'react-router-dom';
import ICon from './Icon';

const Nav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex justify-between items-center'>
      <View path={pathname} />
    </div>
  );
};

export default Nav;

interface IViewProps {
  path: string;
}

const View: React.FC<IViewProps> = ({ path }) => {
  return (
    <React.Fragment>
      {path !== '/' ? (
        <div className='flex gap-[10px] items-center'>
          <ICon.ArrowLeft />
          <p className='font-bold text-[#FFFFFF]'>
            {path === '/detail' ? 'Detail Quiz' : 'UI UX Design Quiz'}
          </p>
        </div>
      ) : (
        <ICon.Menu />
      )}
      {path !== '/quiz' ? (
        <ICon.AvatarClone />
      ) : (
        <div className='rounded-[16px] px-1 w-[72px] bg-white flex items-center justify-around'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M8.30663 14.2133C11.5688 14.2133 14.2133 11.5688 14.2133 8.30666C14.2133 5.0445 11.5688 2.39999 8.30663 2.39999C5.04447 2.39999 2.39996 5.0445 2.39996 8.30666C2.39996 11.5688 5.04447 14.2133 8.30663 14.2133Z'
              stroke='url(#paint0_linear_1_204)'
              strokeWidth='1.2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M8.3067 5.07999V8.30665L10.2934 9.25332'
              stroke='url(#paint1_linear_1_204)'
              strokeWidth='1.2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <defs>
              <linearGradient
                id='paint0_linear_1_204'
                x1='-1.83709'
                y1='-1.79374'
                x2='26.7829'
                y2='16.6258'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3550DC' />
                <stop offset='1' stopColor='#27E9F7' />
              </linearGradient>
              <linearGradient
                id='paint1_linear_1_204'
                x1='7.59415'
                y1='3.59845'
                x2='13.8167'
                y2='5.50489'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#3550DC' />
                <stop offset='1' stopColor='#27E9F7' />
              </linearGradient>
            </defs>
          </svg>
          <p className='bg-gradient-to-r text-transparent from-blue-500 via-blue-400 to-blue-600 bg-clip-text'>
            16:35
          </p>
        </div>
      )}
    </React.Fragment>
  );
};
