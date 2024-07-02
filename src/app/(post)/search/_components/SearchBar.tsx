import React, { useState } from 'react';

import Icon from '@/src/components/Icon';
import TextInput from '@/src/components/TextInput';

interface SearchBarProps {
  onClear: () => void;
  onSubmit: (input: string) => void;
}

const SearchBar = ({ onClear, onSubmit }: SearchBarProps) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClearClick = () => {
    setInput('');
    onClear();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='relative flex w-full items-center justify-end text-gray-accent3'
    >
      <TextInput
        className='ml-[16px] h-[40px] border-gray-accent2 bg-gray-accent2 py-2'
        placeholder='검색어를 입력하세요'
        value={input}
        onChange={handleInputChange}
      />
      {input !== '' && (
        <Icon
          id='close'
          className='absolute right-2'
          aria-label='검색어 지우기'
          onClick={handleClearClick}
          cursor='pointer'
        />
      )}
    </form>
  );
};

export default SearchBar;
