'use client';

import Icon from '@/src/components/Icon';

interface UserPostProps {
  postCount: number;
}

// Todo : 해당 컴포넌트에 내가 작성한 게시글 리스트 조회페이지로 이동하는 로직 추가
const UserPost = ({ postCount }: UserPostProps) => {
  return (
    <div className='flex cursor-pointer items-center justify-between border-b p-4'>
      <div className='flex items-center gap-2'>
        <span>작성한 게시글</span>
        <span>{postCount}</span>
      </div>
      <Icon id='right-arrow' />
    </div>
  );
};

export default UserPost;
