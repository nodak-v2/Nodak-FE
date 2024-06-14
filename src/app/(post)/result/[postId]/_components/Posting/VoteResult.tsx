'use client';

import { useParams } from 'next/navigation';

import { useGetVoteDetailAPI } from '@/src/apis/vote';
import Icon from '@/src/components/Icon';

const VoteResult = () => {
  const { postId } = useParams() as { postId: string };
  const { voteOptions, voteTitle, totalNumber, choiceVoteOptionId } =
    useGetVoteDetailAPI(postId);

  const maxCount = Math.max(...voteOptions.map(({ count }) => count));

  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-full flex-col gap-6 rounded-lg p-4 text-white shadow-lg'>
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
                  <span>{voteOptionContent}</span>
                  <div className='flex w-full items-center gap-3'>
                    {count > 0 && (
                      <div
                        className={`relative h-1 w-full rounded-full ${count === maxCount ? 'bg-red-600' : 'bg-gray-500'}`}
                        style={{ width: `${percentage / 2}%` }}
                      />
                    )}
                    <div
                      className={`text-xs ${count === maxCount ? 'text-red-600' : 'text-gray-500'}`}
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
