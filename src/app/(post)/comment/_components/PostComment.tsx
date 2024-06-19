'use client';

import React, { useState } from 'react';

import { useParams } from 'next/navigation';

import { useCreateComment } from '../../result/[postId]/hooks/useCreateComment';

const PostComment = () => {
  const { postId } = useParams() as { postId: string };
  const [comment, setComment] = useState('');
  const createComment = useCreateComment(postId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 입력된 댓글 값을 이용하여 createComment 함수 호출
    // Todo : 함수 호출에 따른 상태변경 추가해야합니다.
    createComment(comment);
  };

  return (
    <form className='flex h-12' onSubmit={handleSubmit}>
      <input
        className='flex-grow border-t-2 p-4 text-black focus:outline-none'
        placeholder='댓글을 입력해주세요.'
        value={comment}
        onChange={handleChange}
      />
      <button className='w-16 bg-gray-accent2 text-white hover:brightness-90'>
        등록
      </button>
    </form>
  );
};

export default PostComment;
