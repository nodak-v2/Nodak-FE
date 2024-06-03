'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import Icon from '@/src/components/Icon';
import Popup from '@/src/components/POPup';

import GNB from '../components/GNB';
import TopBar from '../components/Topbar';

const posts = [
  {
    postId: '1',
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
    postId: '2',
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
      </TopBar.Container>
      <main className='grow'>
        <ChipContainer currentChannel={currentChannel} />
        <div className='flex flex-col'>
          {posts.map((post, index) => (
            <Link
              key={`${index}-${post.title}`}
              href={`/result/${post.postId}`}
            >
              <PostItem post={post} />
            </Link>
          ))}
        </div>
        <Link href='createPost'>
          <button className='absolute bottom-24 right-5 z-10 flex h-[53px] w-[53px] items-center justify-center rounded-full bg-zinc-200  shadow-lg'>
            <Icon id='pencil-fill' size={24} />
          </button>
        </Link>
      </main>
      <GNB />
      <Popup />
    </div>
  );
};
export default Main;
