'use client';

import { useParams } from 'next/navigation';

import { useGetVoteDetailAPI } from '@/src/apis/vote';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

const VoteResult = () => {
  const { postId } = useParams() as { postId: string };
  const { voteOptions, voteTitle, totalNumber, choiceVoteOptionId } =
    useGetVoteDetailAPI(postId);

  const maxCount = Math.max(...voteOptions.map(({ count }) => count));

  return (
    <div className='flex items-center justify-center rounded-[8px] bg-gray-accent1'>
      <div className='flex w-full flex-col gap-6 p-4 text-white'>
        <div>
          <span className='font-bold'>{voteTitle}</span>
          <p className='text-sm text-gray-400'>{totalNumber}명 참여</p>
        </div>
        <div className='flex flex-col gap-3'>
          {voteOptions.map(({ voteOptionContent, voteOptionId, count }) => {
            const percentage = (count / totalNumber) * 100;

            return (
              <div
                key={voteOptionId}
                className='flex cursor-default items-center gap-4 rounded-[8px] border border-gray-accent3 px-3 py-2'
              >
                {choiceVoteOptionId === voteOptionId ? (
                  <Icon id='select-vote' size={24} />
                ) : (
                  <Icon id='select-default' size={24} />
                )}
                <div className='flex flex-grow flex-col'>
                  <span className='font-text-1-rg'>{voteOptionContent}</span>
                  <div className='flex w-full items-center gap-3'>
                    {count > 0 && (
                      <div
                        className={cn(`relative h-1 w-full rounded-full`, {
                          'bg-primary': count === maxCount,
                          'bg-gray-accent3': count !== maxCount,
                        })}
                        style={{ width: `${percentage / 2}%` }}
                      />
                    )}
                    <div
                      className={cn(`font-text-4-rg`, {
                        'text-primary': count === maxCount,
                        'text-gray-accent3': count !== maxCount,
                      })}
                    >
                      {count}표, {percentage.toFixed(0)}%
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VoteResult;
