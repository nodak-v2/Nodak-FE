'use client';

import { useRouter } from 'next/navigation';

import Icon from '@/src/components/Icon';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Icon id='arrow-left' size={24} className='cursor-pointer' />
    </button>
  );
};

export default BackButton;
