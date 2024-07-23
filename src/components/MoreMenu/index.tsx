'use client';

import { PropsWithChildren } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface MoreMenuProps {
  Icon: React.ReactNode;
}

const MoreMenu = ({ Icon, children }: PropsWithChildren<MoreMenuProps>) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{Icon}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          collisionBoundary={document.querySelector('#layout-Root')}
          collisionPadding={8}
          onCloseAutoFocus={e => e.preventDefault()}
          className=' font-text-3-rg flex flex-col gap-2 rounded-lg bg-[#2d3033] p-2 text-white'
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

interface MoreMenuItemProps {
  label?: string;
  onSelect?: () => void;
}

const MoreItem = ({
  label,
  onSelect,
  children,
}: PropsWithChildren<MoreMenuItemProps>) => {
  return (
    <DropdownMenu.Item onSelect={onSelect} className='cursor-pointer'>
      {children || label}
    </DropdownMenu.Item>
  );
};

MoreMenu.Item = MoreItem;
export default MoreMenu;
