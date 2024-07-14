'use client';

import { useEffect } from 'react';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const ProfileErrorFallBack = ({ error, reset }: ErrorFallBackProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex h-full w-full'>
      <ErrorPage showRetryButton onRetryButtonClick={() => reset()} />
    </div>
  );
};

export default ProfileErrorFallBack;
