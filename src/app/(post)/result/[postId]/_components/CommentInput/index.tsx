import { ChangeEvent, useEffect, useRef, useState } from 'react';

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

import { useGetCommentsAPI, useUpdateCommentAPI } from '@/src/apis/comments';
import Modal from '@/src/components/Modal';
import useModal from '@/src/hooks/useModal';

import { useCreateComment } from '../../hooks/useCreateComment';

const CommentForm = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const { postId } = useParams() as { postId: string };
  const commentId = useSearchParams().get('commentId') as string | null;

  const [comment, setComment] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const createComment = useCreateComment(postId);
  const updateComment = useUpdateCommentAPI(postId, Number(commentId));
  const comments = useGetCommentsAPI(postId);

  const isUpdate = !!commentId;
  const {
    open: openModal,
    close: closeModal,
    isOpen: isModalOpen,
  } = useModal();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (comment.trim() === '') return;
    e.preventDefault();

    isUpdate ? updateComment(comment) : createComment(comment);
    resetComment();
    closeModal();
  };

  const handleCancelEditing = () => {
    resetComment();
    closeModal();
  };

  const resetComment = () => {
    setComment('');
    router.push(currentPath);
  };

  useEffect(() => {
    if (!isUpdate) return;

    const updatedComment = comments.find(
      comment => comment.commentId === Number(commentId),
    );
    setComment(updatedComment ? updatedComment.content : '');
    openModal();
  }, [isUpdate, comments, commentId, openModal]);

  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <div className='w-full'>
      {!isModalOpen && (
        <div
          onClick={openModal}
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
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            value={comment}
            onChange={handleInputChange}
            className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
          />
          <div className='flex gap-2'>
            <button
              className='font-text-1-rg text-gray-accent3'
              onClick={handleCancelEditing}
            >
              취소
            </button>
            <button className='font-text-1-rg mr-3 text-primary'>등록</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CommentForm;
