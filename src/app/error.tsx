'use client';

import { useEffect } from 'react';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const GlobalErrorFallBack = ({ error, reset }: ErrorFallBackProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full w-full'>
      <ErrorPage
        errorMessage={error.message}
        text='어플리케이션에 오류가 발생했습니다.'
        buttonContent='다시 시도하기'
        onClick={() => reset()}
      />
    </div>
  );
};

export default GlobalErrorFallBack;
