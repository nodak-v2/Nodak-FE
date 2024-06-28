import { useCallback, useEffect } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import CommentFormModal from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentFormModal';
import CommentInput from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentInput';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';
import useModal from '@/src/hooks/useModal';

const CommentForm = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId') as string | null;

  const isUpdateComment = Boolean(commentId);

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
    if (isUpdateComment) {
      await updateComment(data.comment);
    } else {
      await createComment(data.comment);
    }

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setTimeout(reset, 0);
    setTimeout(closeModal, 0);
    router.push(currentPath);
  };

  const handleOpenModal = useCallback(() => {
    openModal();
    setTimeout(() => setFocus('comment'), 0);
  }, [openModal, setFocus]);

  const openModalWithComment = useCallback(
    (commentContent: string) => {
      setValue('comment', commentContent);
      handleOpenModal();
    },
    [setValue, handleOpenModal],
  );

  useEffect(() => {
    if (!isUpdateComment) return;

    const updatedComment = comments.find(
      comment => comment.commentId === Number(commentId),
    );

    if (updatedComment) {
      openModalWithComment(updatedComment.content);
    }
  }, [commentId, isUpdateComment, comments, openModalWithComment]);

  return (
    <div className='w-full'>
      {!isModalOpen && <CommentInput onOpenModal={handleOpenModal} />}
      <CommentFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default CommentForm;
