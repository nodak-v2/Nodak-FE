import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useParams, useRouter } from 'next/navigation';

import { useDeleteCommentAPI } from '@/src/apis/comments';
import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentItemMenuProps {
  commentId: number;
  isOwnComment: boolean;
}

const CommentItemMenu = ({ commentId, isOwnComment }: CommentItemMenuProps) => {
  const router = useRouter();
  const { postId } = useParams() as { postId: string };
  const deleteComment = useDeleteCommentAPI(postId, commentId);

  const {
    open: openDeleteModal,
    close: closeDeleteModal,
    isOpen: isDeleteModalOpen,
  } = useModal();

  const handleEditComment = () => {
    router.push(`?commentId=${commentId}&reply=false&edit=true`);
  };

  const handleDeleteComment = async () => {
    await deleteComment();
    closeDeleteModal();
  };

  const handleReplyComment = () => {
    router.push(`?commentId=${commentId}&reply=true&edit=false`);
  };

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
            {isOwnComment && (
              <>
                <DropdownMenu.Item key='edit' onClick={handleEditComment}>
                  수정하기
                </DropdownMenu.Item>
                <DropdownMenu.Item key='delete' onClick={openDeleteModal}>
                  삭제하기
                </DropdownMenu.Item>
              </>
            )}
            <DropdownMenu.Item key='reply' onClick={handleReplyComment}>
              답글달기
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      <ConfirmationModal
        isShow={isDeleteModalOpen}
        description='삭제하시겠습니까?'
        onConfirm={handleDeleteComment}
        onClose={closeDeleteModal}
      />
    </>
  );
};

export default CommentItemMenu;
