'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useGetPostListAPI } from '@/src/apis/postList';
import { searchParamsToGetPostListParams } from '@/src/app/(main)/utils';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';

import EmptyPage from '../components/EmptyPage';
import GNB from '../components/GNB';
import TopBar from '../components/Topbar';

const Main = () => {
  const searchParams = useSearchParams();
  const channel = searchParams.get('channel') as ChannelType;
  const keyword = searchParams.get('keyword') as string;

  const { content: posts } = useGetPostListAPI({
    page: '0',
    size: '8',
    ...searchParamsToGetPostListParams(channel, keyword),
  });

  return (
    <>
      <TopBar.Container>
        <Image src='/picky-logo.png' alt='로고' width={87} height={45} />
      </TopBar.Container>
      <ChipContainer currentChannel={channel} />
      <main className='flex h-full grow flex-col overflow-y-scroll'>
        {posts.length ? (
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
      <GNB />
    </>
  );
};
export default Main;
