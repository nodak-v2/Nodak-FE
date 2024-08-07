'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PullToRefresh from 'react-simple-pull-to-refresh';

import { useGetPostListAPI } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import useInfiniteScroll from '@/src/hooks/useInfiniteScroll';

import EmptyPage from '../components/EmptyPage';
import GNB from '../components/GNB';
import Icon from '../components/Icon';
import TopBar from '../components/Topbar';

const Main = () => {
  const searchParams = useSearchParams();
  const channel = (searchParams.get('channel') as ChannelType | null) ?? 'all';
  const keyword = searchParams.get('keyword') as string;

  const {
    data: posts,
    fetchNextPage,
    refetch,
  } = useGetPostListAPI(keyword, CATEGORY_MAP[channel]);
  const scrollRef = useInfiniteScroll(fetchNextPage);

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <>
      <TopBar.Container>
        <Image src='/picky/logo.svg' alt='logo' width={87} height={45} />
        <Link href='/search'>
          <Icon id='search' />
        </Link>
      </TopBar.Container>
      <ChipContainer currentChannel={channel} />
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
      <GNB />
    </>
  );
};
export default Main;
