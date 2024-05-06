import React, { ChangeEvent, useState } from 'react';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

const VoteForm = () => {
  const [options, setOptions] = useState<string[]>(['', '']);

  const handleOptionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length === 6) return;
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length === 2) return;
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div className='flex flex-col gap-1 rounded-md bg-dark-accent1 p-2'>
      {options.map((option, index) => (
        <div
          key={`${index}`}
          className='flex w-full items-center gap-2 bg-dark-accent1 p-2'
        >
          <input
            value={option}
            onChange={event => handleOptionChange(index, event)}
            className='w-full rounded-sm border border-gray-accent2 bg-dark-accent1 p-3 text-black text-gray-accent1 outline-none ring-gray-accent1 focus:ring-2'
            placeholder='투표항목을 입력하세요.'
          />
          <Icon
            id='subtract-circle'
            className={cn('cursor-pointer text-red-400 hover:text-red-600', {
              'cursor-not-allowed opacity-50 hover:text-red-400':
                options.length === 2,
            })}
            size={24}
            onClick={() => {
              handleRemoveOption(index);
            }}
          />
        </div>
      ))}
      <button
        onClick={handleAddOption}
        className={cn('ml-2 mr-10 rounded-md bg-dark-accent2 p-2 text-white', {
          'cursor-not-allowed opacity-50': options.length === 6,
        })}
      >
        선택항목 추가
      </button>
    </div>
  );
};

export default VoteForm;
