import React from 'react';
import { useNavigate } from 'react-router-dom';
import ICon from '../../../components/Icon';

interface IViewProps {
  path: string;
}

const View: React.FC<IViewProps> = ({ path }) => {
  const navigate = useNavigate();

  return (
    <div className='p-[20px] flex justify-between items-center'>
      {path !== '/' ? (
        <div
          className='flex gap-[10px] items-center'
          onClick={() => {
            navigate(-1);
          }}
        >
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
          <ICon.ClockQuiz />
          <p className='text-gradient'>16:35</p>
        </div>
      )}
    </div>
  );
};

export default View;
