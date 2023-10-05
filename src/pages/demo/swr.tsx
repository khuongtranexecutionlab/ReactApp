import React from 'react';
import useSWR from 'swr';

const DemoSWR: React.FC = () => {
  const fetcher = async (): Promise<string> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await data.json();
    return res.title;
  };

  const { data, isLoading } = useSWR('/api/user/123', fetcher);
  if (isLoading) return <div>loading...</div>;

  // render data
  return <div className='text-[#333] flex justify-center mt-20'>Todo : {data}</div>;
};

export default DemoSWR;
