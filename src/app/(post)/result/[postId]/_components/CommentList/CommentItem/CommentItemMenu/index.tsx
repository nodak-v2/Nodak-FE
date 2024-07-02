import { PropsWithChildren } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '@/src/components/Icon';

const CommentItemMenu = ({ children }: PropsWithChildren) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <Icon id='more-square' />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          onCloseAutoFocus={e => e.preventDefault()}
          className=' font-text-3-rg flex flex-col gap-2 rounded-lg bg-[#2d3033] p-2 text-white'
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

interface CommentItemMenuButtonProps {
  label: string;
  onClick: () => void;
}

const CommentItemMenuButton = ({
  label,
  onClick,
}: CommentItemMenuButtonProps) => {
  return <DropdownMenu.Item onSelect={onClick}>{label}</DropdownMenu.Item>;
};

CommentItemMenu.Button = CommentItemMenuButton;
export default CommentItemMenu;
