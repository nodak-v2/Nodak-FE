'use client';

import { useEffect } from 'react';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const GlobalErrorFallBack = ({ error }: ErrorFallBackProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full w-full'>
      <ErrorPage text='어플리케이션에 오류가 발생했습니다.' />
    </div>
  );
};

export default GlobalErrorFallBack;
