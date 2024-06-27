import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentMenuProps {
  isOwnComment: boolean;
}

const CommentMenu = ({ isOwnComment }: CommentMenuProps) => {
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

  const handleEdit = () => {};

  return (
    <>
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
            {isOwnComment ? (
              <>
                <DropdownMenu.Item key='edit' onClick={handleEdit}>
                  수정하기
                </DropdownMenu.Item>
                <DropdownMenu.Item key='delete' onClick={openDeleteModal}>
                  삭제하기
                </DropdownMenu.Item>
              </>
            ) : (
              <DropdownMenu.Item key='report' onClick={openReportModal}>
                신고하기
              </DropdownMenu.Item>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
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
    </>
  );
};

export default CommentMenu;
