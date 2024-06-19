'use client';

import Link from 'next/link';

export const LinkProfileButton = () => (
  <Link href='/profile' className='w-full rounded-md px-4 py-2'>
    <button className='w-full text-sm text-gray-accent1'>프로필 조회</button>
  </Link>
);

export const LinkDMButton = () => (
  <Link href='/chat' className='w-full rounded-md px-4 py-2'>
    <button className='w-full text-sm text-gray-accent1'>메시지 보내기</button>
  </Link>
);

export const FollowButton = () => {
  const handleFollow = () => {
    console.log('팔로우');
    // 팔로우 로직
  };

  return (
    <button
      className='w-full rounded-md px-4 py-2.5 text-sm text-gray-accent1'
      onClick={handleFollow}
    >
      팔로우
    </button>
  );
};
