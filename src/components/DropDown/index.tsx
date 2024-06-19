import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '@/src/components/Icon';

interface DropDown {
  dropDownItems: {
    label: string;
    onClick: () => void;
  }[];
}

const Dropdown = ({ dropDownItems }: DropDown) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className='items-center justify-center outline-none'
          aria-label='Customise options'
        >
          <Icon id='more-square' />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='rounded-md bg-white p-1'
          sideOffset={5}
        >
          {dropDownItems.map((item, index) => (
            <DropdownMenu.Item
              key={`${index}-${item.label}`}
              className='text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none'
              onClick={item.onClick}
            >
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
