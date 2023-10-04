import React from 'react';
import ICon from '../../components/Icon';

const Home: React.FC = () => {
  return (
    <div className='mt-6 mx-4'>
      <ul className='flex justify-between text-[#999] my-6'>
        <li>Popular</li>
        <li>Science</li>
        <li>Mathematic</li>
        <li className='border-b border-[#3550DC] text-[#3550DC]'>Computer</li>
      </ul>
      <Card title='UI UX Design' active={true} />
      <Card title='Graphic Design' active={false} />
      <p className='mt-4 text-[#333333] text-lg font-bold'>Continue Quiz</p>
      <CardQuiz />
      <div className='mt-[80px]'>
        <button className='w-[327px] h-[50px] rounded-[5px] background-gradient text-white'>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;

interface ICard {
  title: string;
  active: boolean;
}
const Card: React.FC<ICard> = ({ title, active }) => (
  // 3550DC
  <div
    className={`flex mt-4 items-center gap-5 rounded-[5px] bg-white w-[327px] h-[96px] p-4 shadow-lg ${
      active && 'border-[2px] border-[#3550DC]'
    }`}
  >
    <div className='w-[72px] h-[72px] rounded-[3px] bg-[#C4C4C4] ' />
    <div>
      <p className='text-gradient'>{title}</p>
      <div className='flex items-center gap-2 text-[#999]'>
        <ICon.Docs />
        <p>10 Question</p>
      </div>
      <div className='flex items-center gap-2 text-[#999]'>
        <ICon.Clock />
        <p>1 hour 15 min</p>
      </div>
    </div>
    <div className='flex items-center ml-auto'>
      <ICon.Star />
      <p className='text-gradient font-bold'>4.8</p>
    </div>
  </div>
);

const CardQuiz: React.FC = () => (
  <div className='flex mt-4  gap-5 rounded-[5px] bg-white'>
    <div className='w-[112px] h-[112px] rounded-[3px] bg-[#C4C4C4] ' />
    <div className='relative'>
      <p className='text-gradient'>3D Animation</p>
      <div className='flex items-center gap-2 text-[#999]'>
        <ICon.Docs />
        <p className='flex items-center'>
          <span className='text-gradient'>8/</span>
          10 Question
        </p>
      </div>
      <div className='flex items-center gap-2 text-[#999]'>
        <ICon.Clock />
        <p className='flex items-center gap-1'>
          <span className='text-gradient'>35</span> min
        </p>
      </div>
      <button className='mt-2 bg-[#333] w-[179px] h-[32px] rounded-[5px] text-[#ffffff]'>
        Continue Quiz
      </button>
      <div className='absolute top-2 right-0'>
        <ICon.Trash />
      </div>
    </div>
  </div>
);
