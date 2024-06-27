'use client';

import CommentList from './_components/Comments/CommentList';
import PostingMain from './_components/Posting';
import PostingButton from './_components/Posting/PostingButton';

const ResultPage = () => {
  return (
    <div className='flex h-full grow flex-col gap-4 overflow-y-auto'>
      <div className='flex flex-col gap-[36px]'>
        <PostingMain />
        <PostingButton />
      </div>
      <CommentList />
    </div>
  );
};

export default ResultPage;
