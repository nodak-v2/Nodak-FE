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
      <span className='font-h4-sm-bold text-gray-accent3'>활동 배지</span>
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
            className={cn('font-text-2-md', posting < 3 && 'text-gray-accent3')}
          >{`글 ${posting}회 작성`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={voting > 15 ? '/badge/vote-fill.svg' : '/badge/vote-line.svg'}
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', voting < 15 && 'text-gray-accent3')}
          >{`투표 ${voting}회`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={
              comment > 10
                ? '/badge/comment-fill.svg'
                : '/badge/comment-line.svg'
            }
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn(
              'font-text-2-md',
              comment < 10 && 'text-gray-accent3',
            )}
          >{`댓글 ${posting}회`}</span>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <Image
            src={like > 20 ? '/badge/like-fill.svg' : '/badge/like-line.svg'}
            alt='포스팅뱃지'
            width={55}
            height={55}
          />
          <span
            className={cn('font-text-2-md', like < 20 && 'text-gray-accent3')}
          >{`좋아요 ${like}회`}</span>
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
            className={cn('font-text-2-md', follow < 10 && 'text-gray-accent3')}
          >{`팔로워 ${follow}명`}</span>
        </div>
      </div>
    </div>
  );
};

export default BadgeBlock;
