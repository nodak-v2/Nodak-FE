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

  return (
    <div className='bg-dark-accent1 flex flex-col gap-3 p-4'>
      {options.map((option, index) => (
        <div key={`${index}`}>
          <div className='bg-dark-accent1 flex w-full items-center justify-end gap-3 self-end'>
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
            <TextInput
              value={option}
              maxLength={10}
              onChange={event => handleOptionChange(index, event)}
              variant={error && !isOptionvalid(option) ? 'error' : 'default'}
              className={'border text-gray-accent1'}
              placeholder='항목 입력'
            />
          </div>
        </div>
      ))}
      {options.length < MAX_LIMIT && (
        <div className='bg-dark-accent1 flex w-full items-center justify-end gap-3 self-end'>
          <Icon
            id='add-circle'
            className='cursor-pointer'
            size={24}
            onClick={handleAddOption}
          />
          <TextInput
            className={'border text-gray-accent1'}
            placeholder='항목 추가'
            readOnly
          />
        </div>
      )}
      {error && <p className='text-sm text-error'>{error}</p>}
    </div>
  );
};

export default VoteForm;
