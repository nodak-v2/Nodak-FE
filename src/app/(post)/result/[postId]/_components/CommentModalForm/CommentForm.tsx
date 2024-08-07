import { useEffect } from 'react';

import { useParams, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import { useCreateReplyCommentAPI } from '@/src/apis/reply';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentFormProps {
  onCloseModal: () => void;
}

export type CommentFormValues = {
  comment: string;
};

const CommentForm = ({
  onCloseModal: closeCommentFormModal,
}: CommentFormProps) => {
  const { postId } = useParams() as { postId: string };
  const method = useSearchParams().get('method') as 'create' | 'update' | null;
  const target = useSearchParams().get('target') as 'root' | 'reply' | null;
  const comments = useGetCommentsAPI(postId);
  const commentId = useSearchParams().get('commentId');

  const createRootComment = useCreateComment(postId);
  const updateRootComment = useUpdateCommentAPI(postId, +commentId!);
  const createReplyComment = useCreateReplyCommentAPI(postId, +commentId!);

  const isUpdateComment = method === 'update';
  const selectedComment = comments.find(
    comment => comment.commentId === Number(commentId),
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setFocus,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<CommentFormValues>({
    defaultValues: {
      comment: '',
    },
  });

  const { ref, ...rest } = register('comment', { required: true });

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

  const onSubmit: SubmitHandler<CommentFormValues> = async ({ comment }) => {
    if (!method || !target) return;
    const submitComment = submitCommentMap[method][target];

    await submitComment?.(comment);
    reset();
    closeCommentFormModal();
  };

  const {
    isOpen: isCancelModalOpen,
    open: openCancelModal,
    close: closeCancelModal,
  } = useModal();

  const handleCancel = () => {
    reset();
    closeCancelModal();
    closeCommentFormModal();
  };

  useEffect(() => {
    setFocus('comment');
  }, [setFocus]);

  useEffect(() => {
    if (isUpdateComment && selectedComment) {
      setValue('comment', selectedComment.content);
    }
  }, [isUpdateComment, selectedComment, setValue]);

  return (
    <div className='p-4'>
      <form
        className='flex w-full items-center gap-2 rounded-[8px] border border-gray-accent3 p-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...rest}
          ref={e => {
            ref(e);
            e?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className='font-text-1-rg grow border-none bg-transparent text-white placeholder-gray-accent3 focus:outline-none'
        />
        <div className='flex gap-2'>
          <button
            type='button'
            className='font-text-1-rg text-gray-accent3'
            onClick={isDirty ? openCancelModal : handleCancel}
          >
            취소
          </button>
          <button
            type='submit'
            className='font-text-1-rg text-primary disabled:text-gray-accent3'
            disabled={isSubmitting || !isValid}
          >
            등록
          </button>
        </div>
      </form>
      <ConfirmationModal
        isShow={isCancelModalOpen}
        description='작성중인 댓글 삭제하시겠습니까?'
        onConfirm={handleCancel}
        onClose={closeCancelModal}
      />
    </div>
  );
};

export default CommentForm;
