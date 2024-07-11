'use client';

import { useEffect } from 'react';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const ResultPostErrorFallBack = ({ error, reset }: ErrorFallBackProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full w-full'>
      <ErrorPage
        errorMessage={error.message}
        text='게시글을 불러오는 데 실패했습니다.'
        buttonContent='다시 시도하기'
        onClick={() => reset()}
      />
    </div>
  );
};

export default ResultPostErrorFallBack;
