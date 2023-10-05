import React from 'react';
import { useQuery } from 'react-query';

const DemoQuery: React.FC = () => {
  const { isLoading, data } = useQuery(
    'query',
    async () =>
      await fetch('https://jsonplaceholder.typicode.com/posts/1').then(
        async (res) => await res.json()
      )
  );

  if (isLoading) return <div>Loading...</div>;

  return <div className='text-[#333] flex text-center  mt-10'>Post : {data.title}</div>;
};

export default DemoQuery;
