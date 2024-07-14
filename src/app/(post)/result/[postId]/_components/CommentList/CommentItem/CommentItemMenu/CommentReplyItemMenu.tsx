import { useParams, useRouter } from 'next/navigation';

import { useDeleteReplyCommentAPI } from '@/src/apis/reply';
import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import MoreMenu from '@/src/components/MoreMenu';
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
  const router = useRouter();
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

  const handleReportComment = () => {
    router.push('/report');
  };

  return (
    <>
      <MoreMenu Icon={<Icon id='more-square' aria-label='댓글 더보기 메뉴' />}>
        {isOwnComment && (
          <MoreMenu.Item label='삭제하기' onSelect={openDeleteModal} />
        )}
        {!isOwnComment && (
          <MoreMenu.Item label='신고하기' onSelect={handleReportComment} />
        )}
      </MoreMenu>
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
