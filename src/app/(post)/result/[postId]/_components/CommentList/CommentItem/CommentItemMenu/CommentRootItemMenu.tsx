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

  const handleReportComment = () => {
    router.push('/report');
  };

  const handleDeleteComment = async () => {
    await deleteComment();
    closeDeleteModal();
  };

  return (
    <>
      <CommentItemMenu>
        <CommentItemMenu.Item label='답글달기' onSelect={handleReplyComment} />
        {isOwnComment && (
          <>
            <CommentItemMenu.Item
              label='수정하기'
              onSelect={handleEditComment}
            />
            <CommentItemMenu.Item label='삭제하기' onSelect={openDeleteModal} />
          </>
        )}
        {!isOwnComment && (
          <CommentItemMenu.Item
            label='신고하기'
            onSelect={handleReportComment}
          />
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

export default CommentRootItemMenu;
