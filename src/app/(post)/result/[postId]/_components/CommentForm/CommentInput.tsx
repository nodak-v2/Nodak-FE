import React from 'react';

interface CommentInputProps {
  onOpenModal: () => void;
}

const CommentInput = ({ onOpenModal }: CommentInputProps) => {
  return (
    <div
      onClick={onOpenModal}
      className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3'
    >
      <input
        placeholder='댓글을 남겨보세요'
        className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
      />
      <button className='font-text-1-rg mr-3 text-gray-accent3'>등록</button>
    </div>
  );
};

export default CommentInput;
