import { useEffect } from 'react';

import { useParams, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import { useCreateReplyCommentAPI } from '@/src/apis/reply';
import { useCreateComment } from '@/src/app/(post)/result/[postId]/hooks/useCreateComment';

interface CommentFormProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export type CommentFormValues = {
  comment: string;
};

const CommentForm = ({
  isOpenModal,
  onCloseModal: closeModal,
}: CommentFormProps) => {
  const { postId } = useParams() as { postId: string };
  const method = useSearchParams().get('method') as 'create' | 'update' | null;
  const target = useSearchParams().get('target') as 'root' | 'reply' | null;
  const comments = useGetCommentsAPI(postId);
  const commentId = useSearchParams().get('commentId');

  const createRootComment = useCreateComment(postId);
  const updateRootComment = useUpdateCommentAPI(postId, +commentId!);
  const createReplyComment = useCreateReplyCommentAPI(postId, +commentId!);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = useForm<CommentFormValues>();

  const isUpdateComment = method === 'update';
  const selectedComment = comments.find(
    comment => comment.commentId === Number(commentId),
  );
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
    closeModal();
  };

  useEffect(() => {
    if (isOpenModal) setFocus('comment');
  }, [isOpenModal, setFocus]);

  useEffect(() => {
    if (isUpdateComment) {
      setValue('comment', selectedComment?.content || '');
    } else {
      setValue('comment', '');
    }
  }, [isUpdateComment, selectedComment, setValue, setFocus]);

  return (
    <div className='p-4'>
      <form
        className='flex w-full items-center gap-2 rounded-[8px] border border-gray-accent3 p-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('comment', { required: true })}
          className='font-text-1-rg grow border-none bg-transparent text-white placeholder-gray-accent3 focus:outline-none'
        />
        <div className='flex gap-2'>
          <button
            type='button'
            className='font-text-1-rg text-gray-accent3'
            onClick={closeModal}
          >
            취소
          </button>
          <button
            type='submit'
            className='font-text-1-rg text-primary'
            disabled={isSubmitting}
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
