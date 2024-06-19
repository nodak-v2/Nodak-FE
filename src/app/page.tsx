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

import GNB from '../components/GNB';
import Icon from '../components/Icon';
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
        {posts.length === 0 ? (
          <div className='flex h-full flex-col items-center justify-center gap-2'>
            <Icon id='warning' aria-label='투표 글 없음' size={64} />
            <span className='font-semibold text-gray-accent3'>
              작성된 투표 글이 없습니다.
            </span>
          </div>
        ) : (
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
        )}
      </main>
      <GNB />
      {/* <Popup /> */}
    </div>
  );
};
export default Main;
