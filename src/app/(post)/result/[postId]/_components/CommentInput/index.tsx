import { useCallback, useEffect } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import Modal from '@/src/components/Modal';
import useModal from '@/src/hooks/useModal';

import { useCreateComment } from '../../hooks/useCreateComment';

const CommentForm = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId') as string | null;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = useForm<{ comment: string }>();

  const createComment = useCreateComment(postId);
  const updateComment = useUpdateCommentAPI(postId, Number(commentId));
  const comments = useGetCommentsAPI(postId);

  const {
    open: openModal,
    close: closeModal,
    isOpen: isModalOpen,
  } = useModal();

  const onSubmit = async (data: { comment: string }) => {
    if (commentId) {
      await updateComment(data.comment);
    } else {
      await createComment(data.comment);
    }

    handleCloseModal();
  };

  const handleOpenModal = useCallback(() => {
    openModal();
    setTimeout(() => setFocus('comment'), 0);
  }, [openModal, setFocus]);

  const handleCloseModal = () => {
    resetComment();
    closeModal();
  };

  const resetComment = () => {
    reset();
    router.push(currentPath);
  };

  useEffect(() => {
    if (!commentId) return;
    const updatedComment = comments.find(
      comment => comment.commentId === Number(commentId),
    );
    setValue('comment', updatedComment ? updatedComment.content : '');
    handleOpenModal();
  }, [commentId, comments, setValue, handleOpenModal]);

  return (
    <div className='w-full'>
      {!isModalOpen && (
        <div
          onClick={handleOpenModal}
          className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3'
        >
          <input
            placeholder='댓글을 남겨보세요'
            className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
          />
          <button className='font-text-1-rg mr-3 text-gray-accent3'>
            등록
          </button>
        </div>
      )}
      <Modal show={isModalOpen}>
        <form
          className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('comment', { required: true })}
            className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
          />
          <div className='flex gap-2'>
            <button
              type='button'
              className='font-text-1-rg text-gray-accent3'
              onClick={handleCloseModal}
            >
              취소
            </button>
            <button
              type='submit'
              className='font-text-1-rg mr-3 text-primary'
              disabled={isSubmitting}
            >
              등록
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CommentForm;
