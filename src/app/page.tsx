'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useGetPostListAPI } from '@/src/apis/postList';
import { searchParamsToGetPostListParams } from '@/src/app/(main)/utils';
import ChipContainer, {
  ChannelType,
} from '@/src/app/_components/ChipContainer';
import PostItem from '@/src/app/_components/PostItem';
import Icon from '@/src/components/Icon';

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
        <TopBar.Left>
          <TopBar.Title>
            <Icon id='logo' width={87} height={45} />
          </TopBar.Title>
        </TopBar.Left>
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
