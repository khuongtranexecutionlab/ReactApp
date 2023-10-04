import React from 'react';
import ICon from '../../components/Icon';

const Detail: React.FC = () => {
  return (
    <div className='m-4'>
      <p className='text-[#333] mt-4 font-bold'>Brief explanation about this quiz</p>
      <div className='flex flex-col gap-3 my-6'>
        <Target ICon={ICon.DocsTarget} title='10 Question' desc='10 point for a correct answer' />
        <Target ICon={ICon.ClockTarget} title='1 hour 15 min' desc='Total duration of the quiz' />
        <Target ICon={ICon.StarTarget} title='Win 10 star' desc='Answer all questions correctly' />
      </div>
      <div>
        <p>Please read the text below carefully so you can understand it</p>
        <div className='mt-6 flex flex-col gap-3'>
          <Support desc='10 point awarded for a correct answer and no marks for a incorrect answer' />
          <Support desc='Tap on options to select the correct answer' />
          <Support desc='Tap on the bookmark icon to save interesting questions' />
          <Support desc='Click submit if you are sure you want to complete all the quizzes' />
        </div>
      </div>
    </div>
  );
};

export default Detail;

interface ITarget {
  ICon: () => JSX.Element;
  title: string;
  desc: string;
}
const Target: React.FC<ITarget> = ({ ICon, desc, title }) => (
  <div className='flex items-center gap-3'>
    <div>
      <ICon />
    </div>
    <div className='flex flex-col'>
      <p>{title}</p>
      <p className='text-[#999] text-sm'>{desc}</p>
    </div>
  </div>
);

interface ISupport {
  desc: string;
}
const Support: React.FC<ISupport> = ({ desc }) => (
  <div className='flex gap-3 '>
    <div className='mt-2'>
      <ICon.Round />
    </div>
    <p className='text-sm text-[#333]'>{desc}</p>
  </div>
);
