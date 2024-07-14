'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/src/components/Icon';

const ReportPage = () => {
  const router = useRouter();

  const handleNavigateToVote = () => {
    router.push('/');
  };

  return (
    <div className='font-h3-sm flex h-full grow flex-col items-center justify-center'>
      <Icon id='warning' aria-label='오류 발생' size={64} />
      <span className='font-h3-bold mt-3 text-gray-accent3'>
        현재 개발 중인 기능입니다.
      </span>
      <span className='font-h3-bold text-gray-accent3'>
        조금만 기다려 주세요.
      </span>
      <button
        onClick={handleNavigateToVote}
        className='text-h3-sm mt-[60px] flex w-40 items-center justify-center rounded-[28px] bg-primary px-6 py-3'
      >
        투표 둘러보기
      </button>
    </div>
  );
};

export default ReportPage;
