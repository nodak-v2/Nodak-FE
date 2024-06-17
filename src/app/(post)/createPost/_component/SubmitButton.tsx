'use client';

import Button from '@/src/components/Button/Button';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => (
  <Button
    variant='link'
    type='submit'
    className='font-title-1-md w-full '
    onClick={onClick}
  >
    등록
  </Button>
);

export default SubmitButton;
