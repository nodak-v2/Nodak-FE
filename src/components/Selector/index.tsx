'use client';

import { RefObject } from 'react';

import Icon from '@/src/components/Icon';

import useDropdown from './useDropdown';

interface SelectorProps {
  items: string[];
  placeholder: string;
  onChange?: (channel: string) => void;
}

const Selector = ({ items, placeholder, onChange }: SelectorProps) => {
  const {
    isOpen,
    toggleDropdown,
    selectedItem,
    updateSelectedItem,
    dropdownRef,
  } = useDropdown();

  const handleSelectorClick = (item: string) => {
    if (onChange) {
      onChange(item);
    }
    updateSelectedItem(item);
    toggleDropdown();
  };

  return (
    <div
      className='relative'
      onClick={toggleDropdown}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      <button
        type='button'
        className=' font-text-1-rg flex w-full items-center justify-between rounded-lg border-2 border-gray-accent1 p-2 text-white'
      >
        {selectedItem ? (
          <span>{selectedItem}</span>
        ) : (
          <span className='text-gray-accent1'>{placeholder}</span>
        )}
        <Icon
          id='down-arrow'
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 transform' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className='font-text-1-rg z-50 my-2 w-full divide-y-2 divide-gray-accent1 rounded-lg border-2 border-gray-accent1 px-2 text-white'>
          {items.map((item, index) => {
            return (
              <li
                key={`${index}-${item}`}
                onClick={() => handleSelectorClick(item)}
                className='border-gray-accent1text-white z-20 flex w-full cursor-pointer p-2.5'
              >
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Selector;
