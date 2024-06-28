import React from 'react';

import { UseFormRegister } from 'react-hook-form';

import Modal from '@/src/components/Modal';

interface CommentFormModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  register: UseFormRegister<{ comment: string }>;
  isSubmitting: boolean;
}

const CommentFormModal: React.FC<CommentFormModalProps> = ({
  isModalOpen,
  handleCloseModal,
  handleSubmit,
  register,
  isSubmitting,
}) => {
  return (
    <Modal show={isModalOpen}>
      <form
        className='m-4 flex items-center gap-2 rounded-[8px] border border-gray-accent3'
        onSubmit={handleSubmit}
      >
        <input
          {...register('comment', { required: true })}
          className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
        />
        <div className='flex gap-2'>
          <button
            type='button'
            className='font-text-1-rg text-gray-accent3'
            onClick={handleCloseModal}
          >
            취소
          </button>
          <button
            type='submit'
            className='font-text-1-rg mr-3 text-primary'
            disabled={isSubmitting}
          >
            등록
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CommentFormModal;
