import { useForm } from 'react-hook-form';

interface CommentFormProps {
  onSubmit: () => void;
  onCancel: () => void;
  register: ReturnType<typeof useForm<{ comment: string }>>['register'];
  isSubmitting: boolean;
}

const CommentForm = ({
  onSubmit,
  onCancel,
  register,
  isSubmitting,
}: CommentFormProps) => {
  return (
    <div className='p-4'>
      <form
        className='flex w-full items-center gap-2 rounded-[8px] border border-gray-accent3 '
        onSubmit={onSubmit}
      >
        <input
          {...register('comment', { required: true })}
          className='font-text-1-rg grow border-none bg-transparent px-3 py-2 text-white placeholder-gray-accent3 focus:outline-none'
        />
        <div className='flex gap-2'>
          <button
            type='button'
            className='font-text-1-rg text-gray-accent3'
            onClick={onCancel}
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
    </div>
  );
};

export default CommentForm;
