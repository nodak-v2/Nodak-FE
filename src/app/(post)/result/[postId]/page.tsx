'use client';

import { useGetPostDetailAPI } from '@/src/apis/post';
import { useGetVoteDetailAPI } from '@/src/apis/vote';

import CommentList from './_components/Comments/CommentList';

interface ResultPageProps {
  params: { postId: string };
}

const ResultPage = ({ params: { postId } }: ResultPageProps) => {
  const getPostDetail = useGetPostDetailAPI(postId);
  const getVoteDetail = useGetVoteDetailAPI(postId);

  console.log(getPostDetail);
  console.log(getVoteDetail);

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
    <div className='flex h-full flex-col gap-4 overflow-y-auto'>
      <div className='flex flex-col gap-[36px]'>
        {/* <PostDetail />
        <PostIcon /> */}
      </div>
      <CommentList />
    </div>
  );
};

export default ResultPage;
