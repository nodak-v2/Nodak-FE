'use client';

import { useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Toast from '@/src/components/Toast';
import TopBar from '@/src/components/Topbar';

import PostForm from './_components/PostForm';

const CreatePostPage = () => {
  const { login: isLogin } = useGetUserStatusAPI();
  const router = useRouter();

  if (!isLogin) {
    router.push('/signin');
    Toast.default('로그인이 필요합니다.');
  }

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton />
        <TopBar.Title>투표 만들기</TopBar.Title>
      </TopBar.Container>
      <PostForm />
    </>
  );
};

export default CreatePostPage;
