import { useRouter } from 'next/navigation';

import { cn } from '@/src/utils/cn';

import Icon from '../Icon';

interface ErrorPageProps {
  errorMessage?: string;
  text?: string;
  showRetryButton?: boolean;
  showHomeButton?: boolean;
  onRetryButtonClick?: () => void;
}

const ErrorPage = ({
  errorMessage,
  text = '데이터를 불러오는 데 실패했습니다',
  onRetryButtonClick,
  showRetryButton = false,
  showHomeButton = true,
}: ErrorPageProps) => {
  let errorText = 'ERROR';
  const router = useRouter();

  if (errorMessage && errorMessage.includes('NetworkError')) {
    errorText = 'NETWORK ERROR';
  } else if (errorMessage && errorMessage.includes('404')) {
    errorText = '404 ERROR';
  } else if (errorMessage && errorMessage.includes('500')) {
    errorText = 'SERVER ERROR';
  }

  return (
    <div className='font-h3-sm flex h-full grow flex-col items-center justify-center'>
      <Icon id={'warning'} aria-label='오류 발생' size={64} />
      {errorMessage && (
        <span className='mt-3 text-4xl font-semibold text-gray-accent2'>
          {errorText}
        </span>
      )}
      <span className='font-h3-bold mt-3 text-gray-accent3'>{text}</span>
      {showRetryButton && (
        <button
          onClick={onRetryButtonClick}
          className='text-h3-sm mt-[60px] flex w-40 items-center justify-center rounded-[28px] bg-primary px-6 py-3'
        >
          다시시도하기
        </button>
      )}
      {showHomeButton && (
        <button
          onClick={() => router.push('/')}
          className={cn(
            'text-h3-sm flex w-40 items-center justify-center rounded-[28px] px-3 py-3',
            showRetryButton
              ? 'bg-transferent mt-5 border border-primary text-primary'
              : 'mt-[60px] bg-primary',
          )}
        >
          홈으로 이동하기
        </button>
      )}
    </div>
  );
};
export default ErrorPage;
