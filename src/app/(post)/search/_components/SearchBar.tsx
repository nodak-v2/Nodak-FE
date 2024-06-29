import React from 'react';

import Icon from '@/src/components/Icon';
import TextInput from '@/src/components/TextInput';

interface SearchBarProps {
  keyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

const SearchBar = ({ keyword, onChange, onClear }: SearchBarProps) => {
  return (
    <div className='relative flex w-full items-center justify-end text-gray-accent3'>
      <TextInput
        className='h-[40px] w-[90%] border-gray-accent2 bg-gray-accent2 py-2'
        placeholder='검색어를 입력하세요'
        value={keyword}
        onChange={onChange}
      />
      {keyword !== '' && (
        <Icon
          id='close'
          className='absolute right-2'
          aria-label='검색어 지우기'
          onClick={onClear}
          cursor='pointer'
        />
      )}
    </div>
  );
};

export default SearchBar;
