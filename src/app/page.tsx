'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useGetPostListAPI } from '@/src/apis/postList';
import {
  PostContentToPostItemType,
  searchParamsToGetPostListParams,
} from '@/src/app/(main)/utils';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import Icon from '@/src/components/Icon';
import Popup from '@/src/components/POPup';

import GNB from '../components/GNB';
import TopBar from '../components/Topbar';

const Main = () => {
  const searchParams = useSearchParams();
  const channel = searchParams.get('channel') as ChannelType;
  const keyword = searchParams.get('keyword') as string;

  const posts = useGetPostListAPI({
    page: '0',
    size: '8',
    ...searchParamsToGetPostListParams(channel, keyword),
  });

  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.Title>노닥노닥 로고</TopBar.Title>
        </TopBar.Left>
      </TopBar.Container>
      <main className='grow'>
        <ChipContainer currentChannel={channel} />
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
