import { useCallback, useEffect } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import { useCreateReplyCommentAPI } from '@/src/apis/reply';
import CommentFormModal from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentFormModal';
import CommentInput from '@/src/app/(post)/result/[postId]/_components/CommentForm/CommentInput';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';
import useModal from '@/src/hooks/useModal';

const CommentForm = () => {
  const router = useRouter();
  const pathWithoutQueryParams = usePathname();
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId') as string | null;
  const isReplyComment = useSearchParams().get('reply') === 'true';
  const isUpdateComment = useSearchParams().get('edit') === 'true';

  const {
    register,
    handleSubmit,
    reset: resetForm,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = useForm<{ comment: string }>();

  const createComment = useCreateComment(postId);
  const updateComment = useUpdateCommentAPI(postId, Number(commentId));
  const replyComment = useCreateReplyCommentAPI(postId, Number(commentId));
  const comments = useGetCommentsAPI(postId);

  const {
    open: openModal,
    close: closeModal,
    isOpen: isModalOpen,
  } = useModal();

  const onSubmit = async (data: { comment: string }) => {
    if (isUpdateComment) {
      await updateComment(data.comment);
    } else if (isReplyComment) {
      await replyComment(data.comment);
    } else {
      await createComment(data.comment);
    }

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setTimeout(resetForm, 0);
    setTimeout(closeModal, 0);
    router.push(pathWithoutQueryParams);
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

    if (updatedComment) openModalWithComment(updatedComment.content);
  }, [commentId, isUpdateComment, comments, openModalWithComment]);

  useEffect(() => {
    if (!isReplyComment) return;

    handleOpenModal();
  }, [isReplyComment, handleOpenModal]);

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
