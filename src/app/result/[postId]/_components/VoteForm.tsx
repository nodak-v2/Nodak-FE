'use client';

import { useState } from 'react';

import Button from '@/src/app/_components/Button/Button';
import { doVoteAction } from '@/src/app/result/[postId]/actions';
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
      className='flex flex-col rounded-md bg-dark-accent2 p-4 text-gray-accent1'
    >
      <span className='pb-8 text-xl font-bold'>{title}</span>
      <ul className='flex flex-col gap-4'>
        {options.map((content, index) => (
          <div key={`${index}-${content}`}>
            <input
              type='radio'
              name='option'
              className={cn(
                'cursor-pointer rounded-md border-2 border-gray-accent1 bg-dark-accent1 p-4',
                {
                  'bg-dark-accent2': selectedIndex === index,
                },
              )}
              onClick={() => handleClick(index)}
              value={index}
            />
            <div>{content}</div>
          </div>
        ))}
      </ul>
      <Button baseColor='primary'>투표 하기</Button>
    </form>
  );
};

export default VoteForm;
