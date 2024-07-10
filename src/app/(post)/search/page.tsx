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
import useInfiniteScroll from '@/src/hooks/useInfiniteScroll';

import TopBar from '../../../components/Topbar';
import SearchBar from './_components/SearchBar';

const SearchPostPage = () => {
  const searchParams = useSearchParams();
  const channel = (searchParams.get('channel') as ChannelType | null) ?? 'all';

  const [keyword, setKeyword] = useState('');
  const { data: posts, fetchNextPage } = useGetPostListAPI(
    keyword,
    CATEGORY_MAP[channel],
  );

  const scrollRef = useInfiniteScroll(fetchNextPage);

  const handleRemoveClick = () => {
    setKeyword('');
  };

  const handleSubmit = (input: string) => {
    setKeyword(input);
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <SearchBar onClear={handleRemoveClick} onSubmit={handleSubmit} />
      </TopBar.Container>

      {keyword !== '' && (
        <>
          <ChipContainer currentChannel={channel} defaultPath='/search' />
          <main className='flex h-full grow flex-col overflow-y-scroll'>
            {posts.length ? (
              posts.map((post, index) => (
                <Link
                  href={`/result/${post.postId}`}
                  key={`${index}-${post.voteTitle}`}
                >
                  <PostItem post={post} />
                </Link>
              ))
            ) : (
              <EmptyPage href='/createPost' text='작성 글이 없습니다.' />
            )}
            <div ref={scrollRef} />
          </main>
        </>
      )}
    </>
  );
};

export default SearchPostPage;
