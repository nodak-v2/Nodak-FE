'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import PullToRefresh from 'react-simple-pull-to-refresh';

import CommentFormModal from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentFormModal';
import CommentInput from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentInput';
import useModal from '@/src/hooks/useModal';

import CommentList from './_components/Comments/CommentList';
import PostingMain from './_components/Posting';
import PostingButton from './_components/Posting/PostingButton';

const ResultPage = () => {
  const { postId } = useParams() as { postId: string };
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    await queryClient.invalidateQueries({ queryKey: ['votes', postId] });
    await queryClient.invalidateQueries({ queryKey: ['comments', postId] });
  };

  const router = useRouter();
  const { isOpen, open, close } = useModal();

  const handleCreateCommentUrl = () => {
    router.push(`?method=create&target=root`);
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
      <>
        <div className='flex h-full grow flex-col gap-4 overflow-y-auto'>
          <div className='flex flex-col gap-[36px]'>
            <PostingMain />
            <PostingButton />
          </div>
          <CommentList />
        </div>

        {!isOpen && <CommentInput onClick={handleCreateCommentUrl} />}
        <CommentFormModal
          isOpen={false}
          handleOpenModal={open}
          handleCloseModal={close}
        />
      </>
    </PullToRefresh>
  );
};

export default ResultPage;
