'use client';

import CommentList from './_components/Comments/CommentList';
import PostingMain from './_components/Posting';
import PostingButton from './_components/Posting/PostingButton';

const ResultPage = () => {
  // return (
  //   <div className='flex h-full grow flex-col gap-2 overscroll-y-auto'>
  //     <ProfileBlock name={author} imageUrl={profileImageUrl} />
  //     <div className='flex flex-col p-4'>
  //       <span className='text-xl font-bold'>{title}</span>
  //       <span className='pl-1 text-xs text-gray-accent2'>{createdAt}</span>
  //     </div>
  //     <p className='break-words p-4'>{content}</p>
  //     <div className='flex gap-1 p-4'>
  //       <div className='flex gap-0.5'>
  //         <span className='pr-2'>{starCount}</span>
  //       </div>
  //       <div className='flex gap-0.5'>
  //         <CommentLink postId={postId} />
  //         <span>{commentSize}</span>
  //       </div>
  //     </div>
  //   </div>
  // );

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
