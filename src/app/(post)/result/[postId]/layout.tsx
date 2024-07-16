'use client';

import { PropsWithChildren, Suspense } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
  useDeletePostDetailAPI,
  useGetPostDetailAPI,
} from '@/src/apis/postDetail';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import Spinner from '@/src/components/Spinner';
import Toast from '@/src/components/Toast';
import TopBar from '@/src/components/Topbar';
import useModal from '@/src/hooks/useModal';
import { getGenerateMetadata } from '@/src/utils/getGenerateMetadata';

export const generateMetadata = getGenerateMetadata();

const PostDetailLayout = ({ children }: PropsWithChildren) => {
  const { postId } = useParams() as { postId: string };
  const { isAuthor } = useGetPostDetailAPI(postId);
  const { mutateAsync: deletePost } = useDeletePostDetailAPI(postId);

  const { isOpen, open, close } = useModal();

  const handleDeletePost = async () => {
    await deletePost();
    Toast.default('게시글이 삭제되었습니다.');
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 글</TopBar.Title>
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
      </TopBar.Container>
      <ConfirmationModal
        description='정말로 삭제하시겠습니까?'
        onConfirm={handleDeletePost}
        isShow={isOpen}
        onClose={close}
      />
      <Suspense fallback={<Spinner text='게시글 정보를 불러오는 중 입니다.' />}>
        {children}
      </Suspense>
    </>
  );
};

export default PostDetailLayout;
