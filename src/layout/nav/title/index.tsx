import React from 'react';
import ICon from '../../../components/Icon';

interface ITitle {
  path: string;
}

const Title: React.FC<ITitle> = ({ path }) => {
  const render = {
    '/': <TitleHome />,
    '/detail': <TitleDetail />
  }[path];
  return <React.Fragment>{render}</React.Fragment>;
};

const TitleHome: React.FC = () => (
  <div className='px-[20px]'>
    <p>Hello, James</p>
    <p className='font-[700px] text-[20px]'>Let&apos;s test your knowledge</p>
    <div className='relative my-6'>
      <input className='rounded-[35px] h-[40px] pl-8 w-full' placeholder='search' />
      <div className='absolute top-[9px] m-[2px] ml-2'>
        <ICon.Search />
      </div>
      <div className='absolute right-0 top-[9px] m-[2px] mr-3'>
        <ICon.Switch />
      </div>
    </div>
  </div>
);
const TitleDetail: React.FC = () => (
  <div className='flex px-[20px] py-[10px] items-center justify-between'>
    <div>
      <p className='text-lg font-medium'>UI UX Design Quiz</p>
      <p>GET 100 Points</p>
    </div>
    <div className='flex gap-1 items-center'>
      <ICon.Star />
      <p className='text-lg font-medium'>4.8</p>
    </div>
  </div>
);
export default Title;
