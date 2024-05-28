'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { PostList, getPostList } from '@/src/apis/post';
import ChipContainer, {
  ChannelType,
} from '@/src/app/(main)/_component/ChipContainer';
import PostItem from '@/src/app/(main)/_component/PostItem';
import { PostContentToPostItemType } from '@/src/app/(main)/utils';
import Popup from '@/src/app/_components/Popup';
import Icon from '@/src/components/Icon';

import GNB from './_components/GNB';
import TopBar from './_components/Topbar';

const Main = () => {
  const searchParams = useSearchParams();
  const [currentChannel, setCurrentChannel] = useState<ChannelType>('all');
  const [posts, setPosts] = useState<PostList['body']['content']>();

  useEffect(() => {
    const channel = searchParams.get('channel') as ChannelType;
    if (channel) setCurrentChannel(channel);
  }, [searchParams]);

  useEffect(() => {
    const fetchPostList = async () => {
      const response = await getPostList({ page: '0', size: '4' });

      setPosts(response.body.content);
    };

    fetchPostList();
  }, [currentChannel]);

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
        <div className='flex flex-col'>
          {posts?.map((post, index) => (
            <PostItem
              key={`${index}-${post.title}`}
              post={PostContentToPostItemType(post)}
            />
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
