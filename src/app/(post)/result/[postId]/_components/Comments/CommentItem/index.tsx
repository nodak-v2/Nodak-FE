import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

import type { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Icon from '@/src/components/Icon';
import { formatDateCustom } from '@/src/utils/formatDate';

import OwnCommentChip from '../OwnCommentChip';

interface CommentItemProps {
  comment: Comment;
}

const DROP_DOWN_MENUS = [
  {
    id: 'edit',
    label: '수정하기',
  },
  {
    id: 'delete',
    label: '삭제하기',
  },
];

const CommentItem = ({ comment }: CommentItemProps) => {
  const { nickname, content, createdAt, userId } = comment;
  const { userId: ownId } = useGetUserStatusAPI();

  return (
    <div className='flex flex-col gap-2 border-b border-gray-accent2 p-4 text-white'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Image
            src='/user-square.png'
            alt='유저프로필'
            width={24}
            height={24}
          />
          <span className='font-title-1-md'>{nickname}</span>
          {ownId === userId && <OwnCommentChip />}
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button>
              <Icon id='more-square' />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content>
              {DROP_DOWN_MENUS.map(menu => (
                <DropdownMenu.Item key={menu.id} className='bg-white'>
                  {menu.label}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div className='flex flex-col gap-0.5'>
        <span className='font-text-1-rg'>{content}</span>
        <span className='font-text-4-rg text-gray-accent4'>
          {formatDateCustom(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default CommentItem;
