'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import { useGetVoteDetailAPI } from '@/src/apis/vote';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

const VoteResult = () => {
  const { postId } = useParams() as { postId: string };
  const {
    voteOptions,
    voteTitle,
    totalNumber,
    choiceVoteOptionId,
    terminated: isTerminated,
  } = useGetVoteDetailAPI(postId);

  const maxCount = Math.max(...voteOptions.map(({ count }) => count));

  const { isAuthor } = useGetPostDetailAPI(postId);

  return (
    <div className='flex items-center justify-center rounded-[8px] bg-gray-accent1'>
      <div className='flex w-full flex-col gap-6 p-4'>
        <div>
          <span className='font-h3-sm'>{voteTitle}</span>
          <p className='font-text-3-rg text-gray-accent4'>
            총 {totalNumber}명 참여
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          {voteOptions.map(
            ({
              voteOptionContent,
              voteOptionId,
              count,
              voteOptionImageUrl,
            }) => {
              const percentage = (count / totalNumber) * 100;

              return (
                <div
                  key={voteOptionId}
                  className='relative flex cursor-default items-center gap-4 rounded-[8px] border border-gray-accent3 px-3 py-2'
                >
                  {!isAuthor &&
                    (choiceVoteOptionId === voteOptionId ? (
                      <Icon id='select-vote' size={24} />
                    ) : (
                      <Icon id='select-default' size={24} />
                    ))}

                  <div className='flex flex-grow flex-col'>
                    <span className='font-text-1-rg'>{voteOptionContent}</span>
                    <div className='flex w-full items-center gap-3'>
                      {count > 0 && (
                        <div
                          className={cn(
                            `relative h-1 w-full rounded-full`,
                            count === maxCount
                              ? 'bg-primary'
                              : 'bg-gray-accent3',
                          )}
                          style={{ width: `${percentage / 2}%` }}
                        />
                      )}
                      <div
                        className={cn(
                          `font-text-4-rg`,
                          count === maxCount
                            ? 'text-primary'
                            : 'text-gray-accent3',
                        )}
                      >
                        <span>{count}표</span>
                        {totalNumber !== 0 && (
                          <span>{percentage.toFixed(0)}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {voteOptionImageUrl && (
                    <Image
                      src={voteOptionImageUrl}
                      alt='투표이미지'
                      width={24}
                      height={24}
                      className='absolute right-[10px] z-10 max-h-[24px] max-w-[24px] rounded-[4px]'
                    />
                  )}
                </div>
              );
            },
          )}
        </div>
        <button className='font-title-1-md w-full cursor-default rounded-lg bg-gray-accent2 py-3'>
          {isTerminated ? '종료된 투표입니다.' : '이미 투표에 참여하셨습니다.'}
        </button>
      </div>
    </div>
  );
};

export default VoteResult;
