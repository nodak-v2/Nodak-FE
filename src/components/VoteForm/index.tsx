import React, { ChangeEvent, useEffect, useState } from 'react';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

import TextInput from '../TextInput';

const MIN_LIMIT = 2;
const MAX_LIMIT = 6;

interface VoteFormProps {
  onChange: (channel: string[]) => void;
  error?: string | undefined;
}

const VoteForm = ({ onChange, error }: VoteFormProps) => {
  const [options, setOptions] = useState<string[]>(
    new Array(MIN_LIMIT).fill(''),
  );

  useEffect(() => {
    onChange(options);
  }, [options, onChange]);

  const handleOptionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (options.length === MAX_LIMIT) return;
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length === 2) return;
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const isOptionvalid = (option: string): boolean => {
    return option.trim().length >= 1 && option.trim().length <= 20;
  };

  const isLastOption = (index: number) => index === options.length - 1;

  const isBounded = (index: number) =>
    index + 1 < MAX_LIMIT && index + 1 >= MIN_LIMIT;

  return (
    <div className='bg-dark-accent1 flex flex-col gap-3 p-4'>
      {options.map((option, index) => (
        <div key={`${index}`}>
          <div className='bg-dark-accent1 flex w-full items-center justify-end gap-3 self-end'>
            {isLastOption(index) && isBounded(index) ? (
              <Icon
                id='add-circle'
                className='cursor-pointer text-green-400 hover:text-green-600'
                size={24}
                onClick={handleAddOption}
              />
            ) : (
              <Icon
                id='subtract-circle'
                className={cn('hover:gray-accent2 cursor-pointer text-white', {
                  'pointer-events-none opacity-50': options.length <= MIN_LIMIT,
                })}
                size={24}
                onClick={() => {
                  handleRemoveOption(index);
                }}
              />
            )}
            <TextInput
              value={option}
              maxLength={10}
              onChange={event => handleOptionChange(index, event)}
              variant={error && !isOptionvalid(option) ? 'error' : 'default'}
              className={'border text-gray-accent1'}
              placeholder='항목 입력'
            />
          </div>
          {error && !isOptionvalid(option) && (
            <span className='mt-1 pl-2 text-sm text-red-500'>{error}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default VoteForm;
