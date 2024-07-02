import { useEffect } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import { useCreateReplyCommentAPI } from '@/src/apis/reply';
import CommentForm from '@/src/app/(post)/result/[postId]/_components/CommentModalForm/CommentForm';
import CommentModalButton from '@/src/app/(post)/result/[postId]/_components/CommentModalForm/CommentModalButton';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';
import Modal from '@/src/components/Modal';
import useModal from '@/src/hooks/useModal';

type FormValues = {
  comment: string;
};

const CommentFormModal = () => {
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId');
  const method = useSearchParams().get('method') as 'create' | 'update' | null;
  const target = useSearchParams().get('target') as 'root' | 'reply' | null;

  const isCreate = method === 'create';
  const isUpdate = method === 'update';
  const isExistedQueryParams = method && target;

  const {
    isOpen: isOpenModal,
    open: handleOpenModal,
    close: handleCloseModal,
  } = useModal();

  const router = useRouter();
  const pathWithoutQueryParams = usePathname();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const createRootComment = useCreateComment(postId);
  const updateRootComment = useUpdateCommentAPI(postId, +commentId!);
  const createReplyComment = useCreateReplyCommentAPI(postId, +commentId!);
  const comments = useGetCommentsAPI(postId);

  const resetPath = () => router.push(pathWithoutQueryParams);

  const submitCommentMap = {
    create: {
      root: createRootComment,
      reply: createReplyComment,
    },
    update: {
      root: updateRootComment,
      reply: null,
    },
  };

  const onSubmit: SubmitHandler<FormValues> = async ({ comment }) => {
    if (!isExistedQueryParams) return;
    const submitComment = submitCommentMap[method][target];

    await submitComment?.(comment);
    resetPath();
    handleCloseModal();
  };

  const handleButtonClick = () => {
    router.push(`?method=create&target=root`);
  };

  useEffect(() => {
    if (isExistedQueryParams) handleOpenModal();
  }, [isExistedQueryParams, handleOpenModal]);

  useEffect(() => {
    if (!isOpenModal) {
      setValue('comment', '');
      return;
    }
    if (isCreate) {
      setFocus('comment');
      return;
    }
    if (isUpdate) {
      const selectedComment = comments.find(
        comment => comment.commentId === Number(commentId),
      );
      setValue('comment', selectedComment?.content || '');
      setFocus('comment');
    }
  }, [
    isOpenModal,
    isCreate,
    isUpdate,
    commentId,
    comments,
    setValue,
    setFocus,
  ]);

  return (
    <>
      {!isOpenModal && <CommentModalButton onClick={handleButtonClick} />}
      <Modal show={isOpenModal}>
        <CommentForm
          onSubmit={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          onCancel={() => {
            resetPath();
            handleCloseModal();
          }}
          register={register}
        />
      </Modal>
    </>
  );
};

export default CommentFormModal;
