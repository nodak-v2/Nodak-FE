'use client';

import { useRouter } from 'next/navigation';

import ErrorPage from '../components/ErrorPage';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className='flex h-full w-full'>
      <ErrorPage
        errorMessage='404 ERROR'
        text='페이지를 찾을 수 없습니다.'
        buttonContent='홈으로 이동하기'
        onClick={() => router.push('/')}
      />
    </div>
  );
};

export default NotFound;
