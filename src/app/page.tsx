'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useGetPostListAPI } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';

import GNB from '../components/GNB';
import TopBar from '../components/Topbar';

const Main = () => {
  const searchParams = useSearchParams();
  const channel = (searchParams.get('channel') as ChannelType | null) ?? 'all';
  const keyword = searchParams.get('keyword');

  const { data: posts } = useGetPostListAPI(keyword, CATEGORY_MAP[channel]);

  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <Image src='/picky-logo.png' alt='로고' width={87} height={45} />
      </TopBar.Container>
      <main className='grow'>
        <ChipContainer currentChannel={channel} />
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
      </main>
      <GNB />
      {/* <Popup /> */}
    </div>
  );
};
export default Main;
