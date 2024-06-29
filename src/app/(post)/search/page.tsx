'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useGetPostListAPI } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import EmptyPage from '@/src/components/EmptyPage';

import TopBar from '../../../components/Topbar';
import SearchBar from './_components/SearchBar';

const CreatePostPage = () => {
  const searchParams = useSearchParams();
  const channel = (searchParams.get('channel') as ChannelType | null) ?? 'all';
  const [keyword, setKeyword] = useState('');
  const { content: posts } = useGetPostListAPI(keyword, CATEGORY_MAP[channel]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleRemoveClick = () => {
    setKeyword('');
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <SearchBar
          keyword={keyword}
          onChange={handleInputChange}
          onClear={handleRemoveClick}
        />
      </TopBar.Container>

      {keyword !== '' && (
        <ChipContainer currentChannel={channel} defaultPath='/search' />
      )}

      <main className='flex h-full grow flex-col overflow-y-scroll'>
        {posts.length && keyword !== '' ? (
          posts.map((post, index) => (
            <Link
              href={`/result/${post.postId}`}
              key={`${index}-${post.title}`}
            >
              <PostItem post={post} />
            </Link>
          ))
        ) : (
          <EmptyPage />
        )}
      </main>
    </>
  );
};

export default CreatePostPage;
