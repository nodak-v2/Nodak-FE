'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import Icon from '@/src/components/Icon';

import GNB from '../_components/GNB';
import TopBar from '../_components/Topbar';
import ChipContainer from './_component/ChipContainer';
import { ChannelType } from './_component/ChipContainer';
import PostItem from './_component/PostItem';

const posts = [
  {
    title: '게시글 제목입니다.',
    votedCount: 10,
    likedCount: 10,
    commentedCount: 10,
    author: 'homin',
    profileImageUrl: 'https://via.placeholder.com/150',
    imageUrl: 'https://via.placeholder.com/150',
    createdAt: '2021-10-10',
  },
  {
    title: '게시글 제목입니다.',
    votedCount: 10,
    likedCount: 10,
    commentedCount: 10,
    author: 'homin',
    profileImageUrl: 'https://via.placeholder.com/150',
    imageUrl: 'https://via.placeholder.com/150',
    createdAt: '2021-10-10',
  },
];

const Main = () => {
  const searchParams = useSearchParams();
  const [currentChannel, setCurrentChannel] = useState<ChannelType>('all');

  useEffect(() => {
    const channel = searchParams.get('channel') as ChannelType;
    if (channel) setCurrentChannel(channel);
  }, [searchParams]);

  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.Title>노닥노닥 로고</TopBar.Title>
        </TopBar.Left>
        <TopBar.Right>
          <TopBar.NotificationButton />
          <TopBar.SearchButton />
        </TopBar.Right>
      </TopBar.Container>
      <main className='grow'>
        <ChipContainer currentChannel={currentChannel} />
        <p className='text-white'>{currentChannel}</p>
        <div className='flex flex-col gap-1'>
          {posts.map((post, index) => (
            <PostItem key={`${index}-${post.title}`} post={post} />
          ))}
        </div>
        <Link href='createPost'>
          <button className='absolute bottom-24 right-5 z-10 flex h-[53px] w-[53px] items-center justify-center rounded-full bg-zinc-200  shadow-lg'>
            <Icon id='pencil-fill' size={24} />
          </button>
        </Link>
      </main>
      <GNB />
    </div>
  );
};
export default Main;
