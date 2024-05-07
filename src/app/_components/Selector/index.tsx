'use client';

import { RefObject } from 'react';

import Icon from '@/src/components/Icon';

import useDropdown from './useDropdown';

interface Item {
  text: string;
}

interface SelectorProps {
  items: Item[];
  placeholder: string;
}

const Selector = ({ items, placeholder }: SelectorProps) => {
  const {
    isOpen,
    toggleDropdown,
    selectedItem,
    updateSelectedItem,
    dropdownRef,
  } = useDropdown<Item>();

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        ref={dropdownRef as RefObject<HTMLDivElement>}
        className='text-bold flex w-64 justify-between rounded border bg-gray-accent1 p-2'
      >
        <span>{selectedItem ? selectedItem.text : placeholder}</span>
        <Icon id='down-arrow' />
      </button>

      {isOpen && (
        <ul className='absolute z-50 w-64 rounded bg-gray-accent2 shadow-sm'>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                updateSelectedItem(item);
                toggleDropdown();
                console.log(item.text);
              }}
              className={`z-20 flex w-64 border-b border-gray-200 bg-gray-accent2 p-2 hover:brightness-125`}
            >
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Selector;
