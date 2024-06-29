import { useEffect, useMemo } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import { useCreateReplyCommentAPI } from '@/src/apis/reply';
import CommentForm from '@/src/app/(post)/result/[postId]/_components/CommentForm';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';
import Modal from '@/src/components/Modal';

interface CommentFormModalProps {
  isOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const CommentFormModal = ({
  isOpen,
  handleOpenModal,
  handleCloseModal,
}: CommentFormModalProps) => {
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId');
  const method = useSearchParams().get('method') as 'create' | 'update' | null;
  const target = useSearchParams().get('target') as 'root' | null;

  const router = useRouter();
  const pathWithoutQueryParams = usePathname();
  const resetPath = () => router.push(pathWithoutQueryParams);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = useForm<{ comment: string }>();

  const createRootComment = useCreateComment(postId);
  const updateRootComment = useUpdateCommentAPI(postId, +commentId!);
  const createReplyComment = useCreateReplyCommentAPI(postId, +commentId!);
  const comments = useGetCommentsAPI(postId);

  const submitCommentMap = useMemo(
    () => ({
      create: {
        root: createRootComment,
        reply: createReplyComment,
      },
      update: {
        root: updateRootComment,
      },
    }),
    [createRootComment, updateRootComment, createReplyComment],
  );

  const onSubmit = async ({ comment }: { comment: string }) => {
    if (!method || !target) return;
    const submitComment = submitCommentMap[method][target];

    await submitComment(comment);
    resetPath();
    handleCloseModal();
  };

  useEffect(() => {
    if (method && target) handleOpenModal();
  }, [method, target, handleOpenModal]);

  useEffect(() => {
    if (isOpen) {
      const selectedComment = comments.find(
        comment => comment.commentId === Number(commentId),
      );
      setFocus('comment');
      if (!selectedComment) return;
      setValue('comment', selectedComment.content);
    } else if (!isOpen) {
      setValue('comment', '');
    }
  }, [isOpen, commentId, comments, setValue, setFocus]);

  return (
    <Modal show={isOpen}>
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
  );
};

export default CommentFormModal;
