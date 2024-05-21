'use client';

import { useState } from 'react';

import { cn } from '@/src/utils/cn';

interface VoteFormProps {
  title: string;
  options: string[];
}

const VoteForm = ({ title, options }: VoteFormProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <form className='flex flex-col rounded-md bg-dark-accent2 p-4 text-gray-accent1'>
      <span className='pb-8 text-xl font-bold'>{title}</span>
      <ul className='flex flex-col gap-4'>
        {options.map((content, index) => (
          <li
            key={`${index}-${content}`}
            className={cn(
              'cursor-pointer rounded-md border-2 border-gray-accent1 bg-dark-accent1 p-4',
              {
                'bg-dark-accent2': selectedIndex === index,
              },
            )}
            onClick={() => handleClick(index)}
          >
            {content}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default VoteForm;
