'use client';

import { RefObject } from 'react';

import Icon from '@/src/components/Icon';

import useDropdown from './useDropdown';

interface Item {
  text: string;
}

interface SelectorProps {
  items: string[];
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
    <div
      className='relative inline-block'
      onClick={toggleDropdown}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      <button className='text-bold flex w-full justify-between rounded border bg-gray-accent1 p-2'>
        <span>{selectedItem ? selectedItem.text : placeholder}</span>
        <Icon
          id='down-arrow'
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 transform' : ''}`}
        />
      </button>

      {isOpen && (
        <ul className='absolute z-50 w-full rounded bg-gray-accent2 shadow-sm'>
          {items.map((item, index) => {
            const handleSelectorClick = () => {
              updateSelectedItem(item);
              toggleDropdown();
            };

            return (
              <li
                key={`${index}-${item}`}
                onClick={handleSelectorClick}
                className='z-20 flex w-full border-b border-gray-accent2 bg-gray-accent2 p-2 hover:brightness-125'
              >
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Selector;
