import { useParams } from 'next/navigation';

import { useDeleteReplyCommentAPI } from '@/src/apis/reply';
import CommentItemMenu from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemMenu';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentReplyItemMenuProps {
  replyId: number;
  isOwnComment: boolean;
}

const CommentReplyItemMenu = ({
  replyId,
  isOwnComment,
}: CommentReplyItemMenuProps) => {
  const { postId } = useParams() as { postId: string };
  const deleteComment = useDeleteReplyCommentAPI(postId, replyId);

  const {
    open: openDeleteModal,
    close: closeDeleteModal,
    isOpen: isDeleteModalOpen,
  } = useModal();

  const handleDeleteComment = async () => {
    await deleteComment();
    closeDeleteModal();
  };

  return (
    <>
      <CommentItemMenu>
        {isOwnComment && (
          <CommentItemMenu.Button label='삭제하기' onClick={openDeleteModal} />
        )}
      </CommentItemMenu>
      <ConfirmationModal
        isShow={isDeleteModalOpen}
        description='삭제하시겠습니까?'
        onConfirm={handleDeleteComment}
        onClose={closeDeleteModal}
      />
    </>
  );
};

export default CommentReplyItemMenu;
