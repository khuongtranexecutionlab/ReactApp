import React from 'react';
import ICon from '../../components/Icon';

const Quiz: React.FC = () => {
  return (
    <div className='mx-4'>
      <div className='flex'>
        {Array(7)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={`border-b flex justify-center w-full ${
                idx + 4 !== 10 ? 'border-[#D4D4D4] ' : 'border-[#3550DC]'
              }`}
            >
              <span
                className={`h-[32px] my-4 w-[32px] ${
                  idx + 4 === 10 ? 'background-gradient' : 'bg-[#D4D4D4]'
                } flex items-center justify-center rounded-full text-[#fff] `}
              >
                {idx + 4}
              </span>
            </div>
          ))}
      </div>
      <div className='text-base my-8'>What is the meaning of UI UX Design ?</div>
      <div className='flex flex-col gap-8'>
        <Questions title='A' desc='User Interfoce and User Experience' />
        <Questions title='B' desc='User Introface and User Experience' />
        <Questions title='C' desc='User Interfice and Using Experience' />
        <Questions title='D' desc='User Interface and User Experience' result />
        <Questions title='E' desc='Using Interface and Using Experience' />
      </div>
      <div className='mt-12 flex items-center justify-between'>
        <ICon.ArrowQuizLeft />
        <button className='w-[175px] h-[50px] rounded-[5px] border border-[#3550DC] text-gradient'>
          Submit Quiz
        </button>
        <ICon.ArrowQuizRight />
      </div>
    </div>
  );
};

export default Quiz;

interface IQuestions {
  title: string;
  desc: string;
  result?: boolean;
}

const Questions: React.FC<IQuestions> = ({ desc, title, result }) => (
  <div className='flex gap-2 items-center'>
    <p
      className={`w-[40px] h-[40px] rounded-full ${
        result ?? false ? 'background-gradient' : 'bg-[#D4D4D4]'
      } flex items-center justify-center text-[#fff]`}
    >
      {title}
    </p>
    <p className={`text-base ${result ?? false ? 'text-gradient' : 'text-[#333]'}`}>{desc}</p>
  </div>
);
