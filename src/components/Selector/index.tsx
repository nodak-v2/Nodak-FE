'use client';

import { RefObject, useEffect } from 'react';

import { cva } from 'class-variance-authority';

import Icon from '@/src/components/Icon';

import useDropdown from './useDropdown';

const selectorButtonCSS = cva(
  'font-text-1-rg flex w-full items-center justify-between rounded-lg border p-2 text-white',
  {
    variants: {
      variant: {
        default: 'border-gray-accent3 bg-transparent ',
        filled: 'border-gray-accent3',
        error: 'border-error bg-red-500 bg-opacity-10',
      },
      isDisabled: {
        false: '',
        true: 'cursor-not-allowed placeholder-gray-accent2',
      },
    },
    defaultVariants: {
      variant: 'default',
      isDisabled: false,
    },
  },
);
interface SelectorProps {
  items: string[];
  placeholder: string;
  className?: string;
  variant?: 'default' | 'filled' | 'error';
  onChange?: (channel: string) => void;
  defaultValue?: string;
}

const Selector = ({
  items,
  placeholder,
  variant,
  onChange,
  defaultValue,
}: SelectorProps) => {
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

  useEffect(() => {
    if (defaultValue) {
      updateSelectedItem(defaultValue);
      onChange?.(defaultValue);
    }
  }, [defaultValue, updateSelectedItem, onChange]);

  return (
    <div
      className='relative'
      onClick={toggleDropdown}
      ref={dropdownRef as RefObject<HTMLDivElement>}
    >
      <button type='button' className={selectorButtonCSS({ variant })}>
        {selectedItem ? (
          <span>{selectedItem}</span>
        ) : (
          <span className='text-gray-accent3'>{placeholder}</span>
        )}
        <Icon
          id='down-arrow'
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 transform' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className='font-text-1-rg z-50 my-2 w-full divide-y divide-gray-accent1 rounded-lg border border-gray-accent1 px-2 text-white'>
          {items.map((item, index) => {
            return (
              <li
                key={`${index}-${item}`}
                onClick={() => handleSelectorClick(item)}
                className='z-20 flex w-full cursor-pointer border-gray-accent1 p-2.5 text-white'
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
