import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetProfileAPI } from '@/src/apis/profile';
import { cn } from '@/src/utils/cn';

const BadgeBlock = () => {
  const { userId } = useParams() as { userId: string };
  const { userId: myId } = useGetUserStatusAPI();

  const { badge } = useGetProfileAPI(userId ? userId : String(myId));
  const { posting, follow, voting, comment, like } = badge;

  return (
    <div className='flex flex-col gap-4 px-4'>
      <span className='font-h4-sm text-gray-accent3'>활동 배지</span>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={
              posting > 3 ? '/badge/write-fill.svg' : '/badge/write-line.svg'
            }
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', posting < 4 && 'text-gray-accent3')}
          >{`글 3회 작성`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={voting > 5 ? '/badge/vote-fill.svg' : '/badge/vote-line.svg'}
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', voting < 6 && 'text-gray-accent3')}
          >
            투표 5회
          </span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={
              comment > 5
                ? '/badge/comment-fill.svg'
                : '/badge/comment-line.svg'
            }
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', comment < 6 && 'text-gray-accent3')}
          >{`댓글 5회`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={like > 10 ? '/badge/like-fill.svg' : '/badge/like-line.svg'}
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', like < 11 && 'text-gray-accent3')}
          >{`좋아요 11회`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={
              follow > 10 ? '/badge/follow-fill.svg' : '/badge/follow-line.svg'
            }
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', follow < 11 && 'text-gray-accent3')}
          >{`팔로워 10명`}</span>
        </div>
      </div>
    </div>
  );
};

export default BadgeBlock;
