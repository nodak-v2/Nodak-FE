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
    createComment(comment);
    setComment('');
  };

  return (
    <div className='w-full'>
      <form
        className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-600'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='댓글을 남겨보세요'
          value={comment}
          onChange={handleInputChange}
          className='grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-500 focus:outline-none'
        />
        <button className='mr-3 text-gray-400 '>등록</button>
      </form>
    </div>
  );
};

export default CommentForm;
