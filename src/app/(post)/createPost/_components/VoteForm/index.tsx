import React, { ChangeEvent, useRef, useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

import TextInput from '../../../../../components/TextInput';
import { useImageUpload } from '../../../../../hooks/useImageUpload';

const MIN_LIMIT = 2;
const MAX_LIMIT = 6;

interface VoteFormProps {
  onChange: (voteOptions: VoteOption[]) => void;
  error?: string | undefined;
}

export interface VoteOption {
  option: string;
  imageUrl: null | string;
}

const VoteForm = ({ onChange, error }: VoteFormProps) => {
  const [options, setOptions] = useState<VoteOption[]>(
    new Array(MIN_LIMIT).fill({ option: '', imageUrl: null }),
  );
  const inputElements = useRef<(HTMLInputElement | null)[]>([]);

  const imageUpload = useImageUpload();

  const handleImageSelect = async (index: number) => {
    const file = inputElements.current[index]?.files?.[0];
    if (!file) return;

    const imageUrl = await imageUpload(file);
    const newOptions = options.map((option, i) =>
      i === index ? { ...option, imageUrl } : option,
    );
    setOptions(newOptions);
    onChange(newOptions);
  };

  const handleOptionChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newOptions = options.map((option, i) =>
      i === index ? { ...option, option: event.target.value } : option,
    );
    setOptions(newOptions);
    onChange(newOptions);
  };

  const handleAddOption = () => {
    if (options.length === MAX_LIMIT) return;
    setOptions([...options, { option: '', imageUrl: null }]);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length === MIN_LIMIT) return;
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
    onChange(newOptions);
  };

  return (
    <div className='flex flex-col gap-3 bg-gray-accent1 p-4'>
      {options.map(({ option, imageUrl }, index) => (
        <div
          className='relative flex w-full items-center justify-end gap-3 self-end'
          key={index}
        >
          <Icon
            id='subtract-circle'
            className={cn(
              'cursor-pointer',
              options.length <= MIN_LIMIT &&
                'pointer-events-none text-gray-accent3',
            )}
            size={24}
            onClick={() => handleRemoveOption(index)}
          />
          <TextInput
            value={option}
            maxLength={10}
            onChange={event => handleOptionChange(index, event)}
            variant={error ? 'error' : 'default'}
            className='border text-white'
            placeholder='항목 입력'
          />
          <div className='absolute right-[10px] z-10'>
            <label htmlFor={`imageUploadButton-${index}`}>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt='투표옵션이미지'
                  width={24}
                  height={24}
                  className='max-h-[24px] max-w-[24px] rounded-[4px]'
                />
              ) : (
                <Icon id='gallery' size={24} className='cursor-pointer' />
              )}
            </label>
            <input
              id={`imageUploadButton-${index}`}
              className='hidden'
              type='file'
              accept='image/*'
              onChange={() => handleImageSelect(index)}
              ref={element => {
                inputElements.current[index] = element;
              }}
            />
          </div>
        </div>
      ))}
      {options.length < MAX_LIMIT && (
        <div className='bg-dark-accent1 relative flex w-full items-center justify-end gap-3 self-end'>
          <Icon
            id='add-circle'
            className='cursor-pointer'
            size={24}
            onClick={handleAddOption}
          />
          <TextInput
            className='border text-gray-accent1'
            placeholder='항목 추가'
            readOnly
          />
          <div className='absolute right-[10px] z-10 cursor-default'>
            <Icon id='gallery' size={24} />
          </div>
        </div>
      )}
      {error && <p className='text-sm text-error'>{error}</p>}
    </div>
  );
};

export default VoteForm;
