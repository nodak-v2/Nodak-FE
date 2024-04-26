'use client';

import Icon from '@/src/components/Icon';

interface UserPostProps {
  postCount: number;
}

const UserPost = ({ postCount }: UserPostProps) => {
  return (
    <div className='flex items-center justify-between border-b p-4'>
      <div className='flex items-center gap-1'>
        <span>{'내가 작성한 게시글'}</span>
        <span>{postCount}</span>
      </div>
      <Icon id='right-arrow' className='cursor-pointer' />
    </div>
  );
};

export default UserPost;
