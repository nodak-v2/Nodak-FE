'use client';

import { useRef } from 'react';

import SubmitButton from '@/src/app/(post)/createPost/_component/SubmitButton';

import TopBar from '../../../components/Topbar';
import PostForm from './_component/PostForm';

const CreatePostPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    formRef.current?.requestSubmit();
  };

  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.BackButton href='/' />
        </TopBar.Left>
        <TopBar.Title>투표 만들기</TopBar.Title>
        <TopBar.Right>
          <SubmitButton onClick={handleSubmit} />
        </TopBar.Right>
      </TopBar.Container>
      <PostForm ref={formRef} />
    </div>
  );
};

export default CreatePostPage;
