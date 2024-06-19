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
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <Image src='/picky-logo.png' alt='로고' width={87} height={45} />
      </TopBar.Container>
      <main className='grow'>
        <ChipContainer currentChannel={channel} />
        {posts.length ? (
          <div className='flex flex-col'>
            {posts.map((post, index) => (
              <Link
                href={`/result/${post.postId}`}
                key={`${index}-${post.title}`}
              >
                <PostItem post={post} />
              </Link>
            ))}
          </div>
        ) : (
          <EmptyPage />
        )}
      </main>
      <GNB />
      {/* <Popup /> */}
    </div>
  );
};
export default Main;
