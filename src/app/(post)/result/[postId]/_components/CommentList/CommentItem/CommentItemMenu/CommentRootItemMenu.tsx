import { useParams, useRouter } from 'next/navigation';

import { useDeleteCommentAPI } from '@/src/apis/comments';
import CommentItemMenu from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentItemMenu';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface CommentRootItemMenuProps {
  commentId: number;
  isOwnComment: boolean;
}

const CommentRootItemMenu = ({
  commentId,
  isOwnComment,
}: CommentRootItemMenuProps) => {
  const router = useRouter();
  const { postId } = useParams() as { postId: string };
  const deleteComment = useDeleteCommentAPI(postId, commentId);

  const {
    open: openDeleteModal,
    close: closeDeleteModal,
    isOpen: isDeleteModalOpen,
  } = useModal();

  const handleEditComment = () => {
    router.push(`?commentId=${commentId}&method=update&target=root`);
  };

  const handleReplyComment = () => {
    router.push(`?commentId=${commentId}&method=create&target=reply`);
  };

  const handleDeleteComment = async () => {
    await deleteComment();
    closeDeleteModal();
  };

  return (
    <>
      <CommentItemMenu>
        {isOwnComment && (
          <>
            <CommentItemMenu.Button
              label='수정하기'
              onClick={handleEditComment}
            />
            <CommentItemMenu.Button
              label='삭제하기'
              onClick={openDeleteModal}
            />
          </>
        )}
        <CommentItemMenu.Button
          label='답글 달기'
          onClick={handleReplyComment}
        />
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

export default CommentRootItemMenu;
