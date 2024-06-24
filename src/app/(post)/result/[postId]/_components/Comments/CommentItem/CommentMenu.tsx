import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

const CommentMenu = () => {
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
    <>
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
    </>
  );
};

export default CommentMenu;
