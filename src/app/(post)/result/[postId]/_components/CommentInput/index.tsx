'use client';

import { ChangeEvent, useState } from 'react';

import { useParams } from 'next/navigation';

import { useCreateComment } from '../../hooks/useCreateComment';

const CommentForm = () => {
  const { postId } = useParams() as { postId: string };
  const [comment, setComment] = useState('');
  const createComment = useCreateComment(postId);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    createComment(comment);
    setComment('');
  };

  return (
    <div className='w-full'>
      <form
        className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3'
        onSubmit={handleSubmit}
      >
        <input
          placeholder='댓글을 남겨보세요'
          value={comment}
          onChange={handleInputChange}
          className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
        />
        <button className='font-text-1-rg mr-3 text-gray-accent3'>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
