'use client';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const NotificationErrorFallBack = ({ reset }: ErrorFallBackProps) => {
  return (
    <div className='flex h-full w-full'>
      <ErrorPage showRetryButton onRetryButtonClick={reset} />
    </div>
  );
};

export default NotificationErrorFallBack;
