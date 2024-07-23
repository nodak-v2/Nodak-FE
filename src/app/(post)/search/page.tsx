'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PullToRefresh from 'react-simple-pull-to-refresh';

import { useGetPostListAPI } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import EmptyPage from '@/src/components/EmptyPage';
import TopBar from '@/src/components/Topbar';
import useInfiniteScroll from '@/src/hooks/useInfiniteScroll';

import SearchBar from './_components/SearchBar';

const SearchPostPage = () => {
  const searchParams = useSearchParams();
  const channel = (searchParams.get('channel') as ChannelType | null) ?? 'all';

  const [keyword, setKeyword] = useState('');
  const {
    data: posts,
    fetchNextPage,
    refetch,
  } = useGetPostListAPI(keyword, CATEGORY_MAP[channel]);

  const scrollRef = useInfiniteScroll(fetchNextPage);

  const handleRemoveClick = () => {
    setKeyword('');
  };

  const handleSubmit = (input: string) => {
    setKeyword(input);
  };

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton />
        <SearchBar onClear={handleRemoveClick} onSubmit={handleSubmit} />
      </TopBar.Container>

      {keyword !== '' && (
        <>
          <ChipContainer currentChannel={channel} defaultPath='/search' />
          <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
            <main className='flex h-full grow flex-col overflow-y-auto'>
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
                <EmptyPage
                  href={`/createPost?channel=${channel}`}
                  text='작성 글이 없습니다.'
                />
              )}
              <div ref={scrollRef} />
            </main>
          </PullToRefresh>
        </>
      )}
    </>
  );
};

export default SearchPostPage;
