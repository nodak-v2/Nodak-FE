'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import {
  useDeletePostDetailAPI,
  useGetPostDetailAPI,
} from '@/src/apis/postDetail';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import TopBar from '@/src/components/Topbar';
import useModal from '@/src/hooks/useModal';

const PostDetailNavMore = () => {
  const router = useRouter();
  const { postId } = useParams() as { postId: string };
  const { isAuthor } = useGetPostDetailAPI(postId);
  const { mutateAsync: deletePost } = useDeletePostDetailAPI(postId);

  const { isOpen, open, close } = useModal();

  const handleDeletePost = async () => {
    await deletePost(undefined, {
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return (
    <>
      <TopBar.NavMore>
        {isAuthor ? (
          <TopBar.NavMore.Item>
            <button onClick={open}>삭제하기</button>
          </TopBar.NavMore.Item>
        ) : (
          <TopBar.NavMore.Item>
            <Link href='/report'>신고하기</Link>
          </TopBar.NavMore.Item>
        )}
      </TopBar.NavMore>

      <ConfirmationModal
        description='정말로 삭제하시겠습니까?'
        onConfirm={handleDeletePost}
        isShow={isOpen}
        onClose={close}
      />
    </>
  );
};

export default PostDetailNavMore;
