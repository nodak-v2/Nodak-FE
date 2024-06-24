import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

import type { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';
import { formatDateCustom } from '@/src/utils/formatDate';

import OwnCommentChip from '../OwnCommentChip';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { nickname, content, createdAt, userId } = comment;
  const { userId: ownId } = useGetUserStatusAPI();

  const {
    open: openEditModal,
    close: closeEditModal,
    isOpen: isEditModalOpen,
  } = useModal();

  const {
    open: openDeleteModal,
    close: closeDeleteModal,
    isOpen: isDeleteModalOpen,
  } = useModal();

  const {
    open: openReportModal,
    close: closeReportModal,
    isOpen: isReportModalOpen,
  } = useModal();

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
              <DropdownMenu.Item
                key='edit'
                className='bg-white'
                onClick={openEditModal}
              >
                수정하기
              </DropdownMenu.Item>
              <DropdownMenu.Item
                key='delete'
                className='bg-white'
                onClick={openDeleteModal}
              >
                삭제하기
              </DropdownMenu.Item>
              <DropdownMenu.Item
                key='report'
                className='bg-white'
                onClick={openReportModal}
              >
                신고하기
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <ConfirmationModal
          isShow={isEditModalOpen}
          description='수정하시겠습니까?'
          onConfirm={closeEditModal}
          onClose={closeEditModal}
        />
        <ConfirmationModal
          isShow={isDeleteModalOpen}
          description='삭제하시겠습니까?'
          onConfirm={closeDeleteModal}
          onClose={closeDeleteModal}
        />
        <ConfirmationModal
          isShow={isReportModalOpen}
          description='신고하시겠습니까?'
          onConfirm={closeReportModal}
          onClose={closeReportModal}
        />
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
