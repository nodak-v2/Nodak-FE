import { useParams, useRouter } from 'next/navigation';

import { useDeleteCommentAPI } from '@/src/apis/comments';
import CommentItemMenu from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemMenu';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentReplyItemMenuProps {
  commentId: number;
  isOwnComment: boolean;
}

const CommentReplyItemMenu = ({
  commentId,
  isOwnComment,
}: CommentReplyItemMenuProps) => {
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

  return (
    <CommentItemMenu>
      {isOwnComment && (
        <>
          <CommentItemMenu.Button
            label='수정하기'
            onClick={handleEditComment}
          />
          <CommentItemMenu.Button label='삭제하기' onClick={openDeleteModal} />
        </>
      )}
      <ConfirmationModal
        isShow={isDeleteModalOpen}
        description='삭제하시겠습니까?'
        onConfirm={handleDeleteComment}
        onClose={closeDeleteModal}
      />
    </CommentItemMenu>
  );
};

export default CommentReplyItemMenu;
