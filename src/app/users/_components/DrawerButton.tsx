'use client';

import Link from 'next/link';

interface DrawerButtonProps {
  isMe?: boolean;
}
const DrawerButton = ({ isMe = true }: DrawerButtonProps) => {
  return (
    isMe && (
      <div className='flex items-center gap-4'>
        <Link
          href='/chat'
          className='w-full rounded-md bg-dark-accent1 px-4 py-2'
        >
          <button className='w-full text-sm text-gray-accent1'>
            메시지 보내기
          </button>
        </Link>
        <Link
          href='/profile'
          className='w-full rounded-md bg-dark-accent1 px-4 py-2'
        >
          <button className='w-full text-sm text-gray-accent1'>
            프로필 조회
          </button>
        </Link>
        <button className='w-full rounded-md bg-dark-accent1 px-4 py-2 text-sm text-gray-accent1'>
          팔로우
        </button>
      </div>
    )
  );
};

export default DrawerButton;
