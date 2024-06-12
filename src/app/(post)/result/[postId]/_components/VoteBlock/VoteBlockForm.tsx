'use client';

import { useState } from 'react';

import { doVoteAction } from '@/src/app/(post)/result/[postId]/actions';
import Button from '@/src/components/Button/Button';
import { cn } from '@/src/utils/cn';

interface VoteFormProps {
  title: string;
  options: string[];
  voteId: number;
}

const VoteForm = ({ title, options, voteId }: VoteFormProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  const doVoteWithArgs = doVoteAction.bind(null, voteId);

  return (
    <form
      action={doVoteWithArgs}
      className='flex flex-col gap-6 rounded-md bg-dark-accent2 p-4 text-gray-accent1'
    >
      <span className='text-xl font-bold'>{title}</span>
      <ul className='flex flex-col gap-4'>
        {options.map((content, index) => (
          <li
            key={`${index}-${content}`}
            className={cn(
              'flex w-full items-center rounded-md border-2 border-gray-accent1 bg-dark-accent1',
              {
                'bg-dark-accent2': selectedIndex === index,
              },
            )}
          >
            <input
              id={`radio-${index}`}
              className='hidden'
              type='radio'
              name='option'
              onClick={() => handleClick(index)}
              value={index}
            />
            <label
              htmlFor={`radio-${index}`}
              className='h-full w-full cursor-pointer p-4'
            >
              {content}
            </label>
          </li>
        ))}
      </ul>
      <Button baseColor='primary'>투표 하기</Button>
    </form>
  );
};

export default VoteForm;
