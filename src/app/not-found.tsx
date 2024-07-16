'use client';

import ErrorPage from '../components/ErrorPage';

const NotFound = () => {
  return (
    <div className='flex h-full w-full'>
      <ErrorPage errorMessage='404 ERROR' text='페이지를 찾을 수 없습니다.' />
    </div>
  );
};

export default NotFound;
