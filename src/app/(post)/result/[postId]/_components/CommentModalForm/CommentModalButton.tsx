import React from 'react';

import { useRouter } from 'next/navigation';

const CommentModalButton = () => {
  const router = useRouter();
  const handleNavigateToCommentRoot = () => {
    router.push(`?method=create&target=root`);
  };

  return (
    <div
      onClick={handleNavigateToCommentRoot}
      className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3 p-3'
    >
      <input
        placeholder='댓글을 남겨보세요'
        className='font-text-1-rg grow border-none bg-transparent text-white placeholder-gray-accent3 focus:outline-none'
      />
      <button className='font-text-1-rg text-gray-accent3'>등록</button>
    </div>
  );
};

export default CommentModalButton;
