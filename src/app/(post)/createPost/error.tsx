'use client';

import { ErrorFallBackProps } from '@/src/app/global-error';
import ErrorPage from '@/src/components/ErrorPage';

const CreatePostErrorFallBack = ({ reset }: ErrorFallBackProps) => (
  <div className='flex h-full w-full'>
    <ErrorPage showRetryButton onRetryButtonClick={reset} />
  </div>
);

export default CreatePostErrorFallBack;
